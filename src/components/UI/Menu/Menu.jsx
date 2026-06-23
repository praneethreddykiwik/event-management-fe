import { useEffect, useState } from "react";
import { Icon } from "../../Icons/Icons";
import styled from "styled-components";
import { Inputs } from "../../Inputs/Inputs";
import {
  bookmarkEventApi,
  getBookmarkByEntityApi,
} from "../../../api/bookmark.api";

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
  const [isLoadingBookmark, setIsLoadingBookmark] = useState(true);

  const [bookmarks, setBookmarks] = useState([
    { id: 1, label: "Work", checked: false },
    { id: 2, label: "Personal", checked: false },
    { id: 3, label: "Urgent", checked: false },
  ]);

  const isBookmarked = bookmarks.some((b) => b.checked);

  useEffect(() => {
    const loadBookmark = async () => {
      try {
        setIsLoadingBookmark(true);
        const query = `?entity_id=${uid}&entity_type=${type}`;
        const res = await getBookmarkByEntityApi(query);
        const bookmarkData = res?.data?.message;

        setBookmarks((prev) =>
          prev.map((b) => ({
            ...b,
            checked: bookmarkData?.bookmark_name
              ? b.label === bookmarkData.bookmark_name
              : false,
          })),
        );
      } catch (error) {
        console.error("Failed to load bookmark:", error);
      } finally {
        setIsLoadingBookmark(false);
      }
    };

    if (uid && type) {
      loadBookmark();
    }
  }, [uid, type]);

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleToggleBookmark = async (id) => {
    if (isLoadingBookmark) return;

    const selectedBookmark = bookmarks.find((b) => b.id === Number(id));
    if (!selectedBookmark) return;

    const willBeChecked = !selectedBookmark.checked;

    setBookmarks((prev) =>
      prev.map((b) => ({
        ...b,
        checked: b.id === Number(id) ? willBeChecked : false,
      })),
    );

    try {
      const payloadObj = {
        entity_id: uid,
        bookmark_name: willBeChecked ? selectedBookmark.label : null,
        entity_type: type,
      };

      await bookmarkEventApi(payloadObj);
    } catch (error) {
      console.error("Failed to save bookmark:", error);

      setBookmarks((prev) =>
        prev.map((b) => ({
          ...b,
          checked: b.id === Number(id) ? !willBeChecked : b.checked,
        })),
      );
    }
  };

  return (
    <Ctn tabIndex={-1} onBlur={handleBlur}>
      <IconBtn onClick={toggleDropdown} type="button">
        <Icon
          variant={icon}
          sx={{ color: isBookmarked ? "#D4AF37" : iconColor }}
        />
      </IconBtn>

      <DropdownMenu $open={open} $align={align}>
        <MenuHeader>{title}</MenuHeader>

        {typeof children === "function"
          ? children(() => setOpen(false))
          : children}

        <CheckboxListWrapper>
          {bookmarks.map((b) => (
            <CheckboxItem
              key={b.id}
              onClick={() => handleToggleBookmark(b.id)}
              $checked={b.checked}
            >
              <StyledCheckbox
                type="checkbox"
                checked={b.checked}
                onChange={() => handleToggleBookmark(b.id)}
              />
              <CheckboxLabel>{b.label}</CheckboxLabel>
            </CheckboxItem>
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

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f1f3f4;
  }
`;

const StyledCheckbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #26C867;
  cursor: pointer;
`;

const CheckboxLabel = styled.span`
  display: flex;
  font-size: 13px;
  color: #3c4043;
  user-select: none;
`;
