import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../Icons/Icons";
import { Inputs } from "../../Inputs/Inputs";

export const Bookmark = ({
  icon = "bookmark",
  iconColor = "black",
  title = "Save to Bookmarks",
  type,
  entityId,
  bookmarks = [],
  onToggle,
  onCreateFolder,
}) => {
  const [open, setOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const foldersForThisType = bookmarks.filter((b) => b.entity_type === type);

  const folderNames = foldersForThisType.map((b) => b.bookmark_name);

  const selectedFolders = foldersForThisType
    .filter((b) => b.entity_ids?.includes(entityId))
    .map((b) => b.bookmark_name);

  const isBookmarked = selectedFolders.length > 0;

  const closeMenu = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  const handleCheckboxChange = (event) => {
    const newSelectedFolders = event.target.value;

    const folderWasAdded = newSelectedFolders.length > selectedFolders.length;

    const changedFolder = folderWasAdded
      ? newSelectedFolders.find((f) => !selectedFolders.includes(f))
      : selectedFolders.find((f) => !newSelectedFolders.includes(f));

    onToggle(changedFolder, type, entityId);
  };

  const handleAddFolder = () => {
    const folderName = newFolderName.trim();
    if (!folderName) return;

    onCreateFolder(folderName);
    onToggle(folderName, type, entityId);
    setNewFolderName("");
  };

  return (
    <Ctn tabIndex={-1} onBlur={closeMenu}>
      <IconBtn type="button" onClick={() => setOpen(!open)}>
        <Icon
          variant={icon}
          sx={{ color: isBookmarked ? "#D4AF37" : iconColor }}
        />
      </IconBtn>

      <DropdownMenu $open={open}>
        <MenuHeader>{title}</MenuHeader>

        {folderNames.length > 0 && (
          <Inputs
            type="checkbox-group"
            name="bookmarkFolders"
            list={folderNames}
            value={selectedFolders}
            onChange={handleCheckboxChange}
          />
        )}

        <AddFolderRow>
          <Inputs
            type="text"
            name="newFolderName"
            placeholder="New folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            small
          />
          <AddButton type="button" onClick={handleAddFolder}>
            +
          </AddButton>
        </AddFolderRow>
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
  padding: 4px;
`;

const DropdownMenu = styled.div`
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  min-width: 200px;
  padding: 10px 12px;
  margin-top: 4px;
  gap: 8px;
  z-index: 50;
`;

const MenuHeader = styled.div`
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  color: #70757a;
  border-bottom: 1px solid #f1f3f4;
  padding-bottom: 6px;
`;

const AddFolderRow = styled.div`
  display: flex;
  gap: 6px;
`;

const AddButton = styled.button`
  background: #26c867;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
`;