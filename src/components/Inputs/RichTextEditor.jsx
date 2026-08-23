import React, { useState } from "react";
import styled, { css } from "styled-components";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import CodeIcon from "@mui/icons-material/Code";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import { baseStyles } from "./Inputs.styled";
import { InputLayout } from "./InputLayout";

const HIGHLIGHT_COLORS = [
  "#fff475",
  "#ccff90",
  "#a7ffeb",
  "#cbf0f8",
  "#d7aefb",
  "#fbbc04",
];

export const RichTextEditor = ({
  value = "",
  placeholder = "Write a comment...",
  onChange,
  name,
  error,
  disabled,
  validations,
}) => {
  const [showColors, setShowColors] = useState(false);

  // This state is only used to force toolbar re-render
  // when selection/format changes.
  const [, setEditorVersion] = useState(0);

  const refreshToolbar = () => {
    setEditorVersion((prev) => prev + 1);
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
      Link.configure({
        openOnClick: false,
      }),
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange?.({ target: { value: editor.getHTML() } });
      refreshToolbar();
    },
    onSelectionUpdate: () => {
      refreshToolbar();
    },
    onTransaction: () => {
      refreshToolbar();
    },
  });

  if (!editor) return null;

  const applyHighlight = (color) => {
    editor.chain().focus().setHighlight({ color }).run();
    setShowColors(false);
  };

  const removeHighlight = () => {
    editor.chain().focus().unsetHighlight().run();
    setShowColors(false);
  };

  return (
    <EditorWrapper error={error} validations={validations}>
      <Toolbar>
        <ToolbarButton
          type="button"
          $active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Bold"
        >
          <FormatBoldIcon fontSize="small" />
        </ToolbarButton>

        <ToolbarButton
          type="button"
          $active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Italic"
        >
          <FormatItalicIcon fontSize="small" />
        </ToolbarButton>

        <ToolbarButton
          type="button"
          $active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          title="Bullet list"
        >
          <FormatListBulletedIcon fontSize="small" />
        </ToolbarButton>

        <ToolbarButton
          type="button"
          $active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          title="Numbered list"
        >
          <FormatListNumberedIcon fontSize="small" />
        </ToolbarButton>

        <ToolbarButton
          type="button"
          $active={editor.isActive("codeBlock")}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          title="Code block"
        >
          <CodeIcon fontSize="small" />
        </ToolbarButton>

        <ColorWrapper>
          <ToolbarButton
            type="button"
            $active={editor.isActive("highlight")}
            onClick={() => setShowColors((prev) => !prev)}
            title="Highlight"
          >
            <FormatColorFillIcon fontSize="small" />
          </ToolbarButton>

          {showColors && (
            <ColorMenu>
              {HIGHLIGHT_COLORS.map((color) => (
                <ColorButton
                  key={color}
                  type="button"
                  $color={color}
                  onClick={() => applyHighlight(color)}
                  title={color}
                />
              ))}

              <ToolbarButton
                type="button"
                onClick={removeHighlight}
                title="Remove highlight"
              >
                X
              </ToolbarButton>
            </ColorMenu>
          )}
        </ColorWrapper>

        <ToolbarButton
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Undo"
        >
          <UndoIcon fontSize="small" />
        </ToolbarButton>

        <ToolbarButton
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Redo"
        >
          <RedoIcon fontSize="small" />
        </ToolbarButton>
      </Toolbar>

      <StyledEditorContent editor={editor} name={name} $hasError={!!error} />
    </EditorWrapper>
  );
};

const EditorWrapper = styled(InputLayout)`
  background: #ffffff;
  overflow: hidden;
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 8px 0 18px;
  background: #ffffff;
`;

const ToolbarButton = styled.button`
  border: none;
  background: ${({ $active }) => ($active ? "#deebff" : "transparent")};
  color: ${({ $active }) => ($active ? "#0052cc" : "#172b4d")};
  border-radius: 4px;
  padding: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? "#deebff" : "#f4f5f7")};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const ColorWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const ColorMenu = styled.div`
  position: absolute;
  top: 34px;
  left: 0;
  z-index: 10;
  display: flex;
  gap: 6px;
  padding: 8px;
  border: 1px solid #dfe1e6;
  border-radius: 6px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(9, 30, 66, 0.15);
`;

const ColorButton = styled.button`
  width: 22px;
  height: 22px;
  border: 1px solid #c1c7d0;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
  }
`;

const StyledEditorContent = styled(EditorContent)`
  // ${baseStyles};

  padding-top: 16px;
  padding-bottom: 16px;
  min-height: 120px;
  height: unset;

  & .ProseMirror {
    outline: none;
    min-height: 100px;
    font-size: 14px;
    color: #172b4d;
    text-align: left;
  }

  & .ProseMirror p {
    margin: 0 0 8px;
  }

  & .ProseMirror ul {
    list-style-type: disc;
    padding-left: 24px;
    margin: 8px 0;
  }

  & .ProseMirror ol {
    list-style-type: decimal;
    padding-left: 24px;
    margin: 8px 0;
  }

  & .ProseMirror li {
    display: list-item;
    margin: 4px 0;
  }

  & .ProseMirror li p {
    margin: 0;
  }

  & .ProseMirror code {
    background: #f4f5f7;
    border-radius: 4px;
    padding: 2px 4px;
    font-family: monospace;
  }

  & .ProseMirror pre {
    background: #172b4d;
    color: #ffffff;
    border-radius: 6px;
    padding: 12px;
    overflow-x: auto;
  }

  & .ProseMirror pre code {
    background: transparent;
    color: inherit;
    padding: 0;
  }

  & .ProseMirror mark {
    border-radius: 3px;
    padding: 0 2px;
  }

  & .ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    color: #6b778c;
    float: left;
    height: 0;
    pointer-events: none;
  }
`;
