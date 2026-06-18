import { useEffect, useRef, useState } from "react";
import { Icon } from "../../Icons/Icons";
import styled from "styled-components";
import { Inputs } from "../../Inputs/Inputs";
import { bookmarkEventApi } from "../../../api/bookmark.api";

export const Menu = ({
  icon,
  iconColor = "black",
  children,
  uid,
  type,
  title,
  align = "right",
}) => {
  const [open, setOpen] = useState(false);
  const isInitialMount = useRef(true);
  const [bookmarks, setBookmarks] = useState([
    { id: 1, label: "Work", checked: true },
    { id: 2, label: "Personal", checked: false },
    { id: 3, label: "Urgent", checked: false },
  ]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (!open) {
      const selectedOption = bookmarks.filter((b) => b.checked);
      const payloadObj = {
        uid: uid,
        bookmark: selectedOption,
        type: type,
      };
      bookmarkEventApi(payloadObj);
    }
  }, [open, bookmarks, uid, type]);

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleToggleBookmark = (id) => {
    setBookmarks((prev) =>
      prev.map((b) => ({
        ...b,
        checked: b.id === Number(id) ? true : false,
      })),
    );
  };

  return (
    <Ctn tabIndex={-1} onBlur={handleBlur}>
      <IconBtn onClick={toggleDropdown} type="button">
        <Icon variant={icon} sx={{ color: iconColor }} />
      </IconBtn>

      <DropdownMenu $open={open} $align={align}>
        {/* If children is a function, pass close handler so children can close the menu */}
        <MenuHeader>{title}</MenuHeader>
        {typeof children === "function"
          ? children(() => setOpen(false))
          : children}
        <CheckboxListWrapper>
          {bookmarks.map((b) => (
            <Inputs
              key={b.id}
              type="checkbox"
              name={b.id}
              value={b.checked}
              list={[b.label]}
              onChange={(e) => {
                handleToggleBookmark(e.target.name);
              }}
            />
          ))}
        </CheckboxListWrapper>
      </DropdownMenu>
    </Ctn>
  );
};

const Ctn = styled.div`
  display: inline-block;
  position: relative;
`;

const IconBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

const DropdownMenu = styled.div`
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  ${({ $align }) => ($align === "left" ? "left: 0;" : "right: 0;")}
  background: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  z-index: 50;
  min-width: 180px;
  padding: 6px 0;
  margin-top: 4px;
`;

const MenuHeader = styled.div`
  padding: 6px 16px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  color: #70757a;
  border-bottom: 1px solid #f1f3f4;
  margin-bottom: 4px;
  white-space: nowrap;
`;

const CheckboxListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;

  & > * {
    padding: 6px 8px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #f1f3f4;
    }
  }
`;
