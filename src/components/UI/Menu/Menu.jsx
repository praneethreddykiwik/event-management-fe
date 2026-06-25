import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../Icons/Icons";
import styled from "styled-components";
import { bookmarkEventApi, getBookmarkByEntityApi } from "../../../api/bookmark.api";
import {
  setBookmark,
  removeBookmark,
  bookmarksSelector,
} from "../../../redux/bookmarks/bookmarks.slice";

const BOOKMARKS = [
  { id: 1, label: "Work" },
  { id: 2, label: "Personal" },
  { id: 3, label: "Urgent" },
];

export const Menu = ({
  icon,
  iconColor = "black",
  children,
  uid,
  type,
  title,
  align = "right",
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { bookmarksData } = useSelector(bookmarksSelector);
  const savedBookmarkName = bookmarksData?.[uid];
  const isCached = uid in (bookmarksData ?? {});
  const isBookmarked = !!savedBookmarkName;

  useEffect(() => {
    if (!uid || !type || isCached) return;

    const loadBookmark = async () => {
      try {
        const query = `?entity_id=${uid}&entity_type=${type}`;
        const res = await getBookmarkByEntityApi(query);
        const bookmarkName = res?.data?.message?.bookmark_name ?? null;
        dispatch(setBookmark({ entity_id: uid, bookmark_name: bookmarkName }));
      } catch (err) {
        console.error("Failed to load bookmark:", err);
      }
    };

    loadBookmark();
  }, [uid, type, isCached]);

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleToggleBookmark = async (id) => {
    if (isLoading) return;

    const selectedBookmark = BOOKMARKS.find((b) => b.id === Number(id));
    if (!selectedBookmark) return;

    const isAlreadyChecked = savedBookmarkName === selectedBookmark.label;
    const willBeChecked = !isAlreadyChecked;

    if (willBeChecked) {
      dispatch(setBookmark({ entity_id: uid, bookmark_name: selectedBookmark.label }));
    } else {
      dispatch(removeBookmark({ entity_id: uid }));
      return;
    }

    setIsLoading(true);
    try {
      await bookmarkEventApi({
        entity_id: uid,
        bookmark_name: selectedBookmark.label,
        entity_type: type,
      });
    } catch (error) {
      console.error("Failed to save bookmark:", error);
      dispatch(removeBookmark({ entity_id: uid }));
    } finally {
      setIsLoading(false);
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
          {BOOKMARKS.map((b) => (
            <CheckboxItem
              key={b.id}
              onClick={() => handleToggleBookmark(b.id)}
            >
              <StyledCheckbox
                type="checkbox"
                checked={savedBookmarkName === b.label}
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
  accent-color: #26c867;
  cursor: pointer;
`;

const CheckboxLabel = styled.span`
  font-size: 13px;
  color: #3c4043;
  user-select: none;
`;