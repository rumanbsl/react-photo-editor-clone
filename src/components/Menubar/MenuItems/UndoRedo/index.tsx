import styled from "styled-components";
import { Icon } from "@/components/Icon";
import { buttonReset } from "@/utils/css";

const UndoRedoWrapper = styled.div`
  &:first-of-type {
    margin-right: 1.311rem;
  }

  &:nth-of-type(2) {
    margin-right: 1.811rem;
  }
`;

const IconWrapper = styled.button<{ width?: number }>`
  ${buttonReset}

  align-items: center;
  background-color: #69696c;
  display: inline-flex;
  font-size: 1.8rem;
  justify-content: center;
  width: ${({ width }) => width && `${width}px`};

  &:first-child {
    margin-right: 0.178rem;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey23};

    span {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  &.plain {
    background-color: unset;
    padding: 0;
  }
`;

export const UndoRedo = () => {
  return (
    <>
      <UndoRedoWrapper>
        <IconWrapper type="button" width={33.78}>
          <Icon name="cornerUpLeft" />
        </IconWrapper>
        <IconWrapper type="button" width={21.33}>
          <Icon name="chevronDown" />
        </IconWrapper>
      </UndoRedoWrapper>
      <UndoRedoWrapper>
        <IconWrapper type="button" disabled width={33.78}>
          <Icon name="cornerUpRight" />
        </IconWrapper>
        <IconWrapper type="button" disabled width={21.33}>
          <Icon name="chevronDown" />
        </IconWrapper>
      </UndoRedoWrapper>
      <IconWrapper type="button" className="plain">
        <Icon name="refreshCw" />
      </IconWrapper>
    </>
  );
};
