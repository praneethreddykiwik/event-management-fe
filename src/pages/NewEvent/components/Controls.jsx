import {
  ControlsContainer,
  ControlsRow,
  LeftControls,
  CenterControls,
  RightControls,
  ControlIcon,
  TimeText,
  TimelineRow,
  TimelineWrapper,
  TimelineBar,
  TimelineProgress,
  VolumeWrapper,
  VolumeIcon,
  VolumeBar
} from "../NewEvent.styles";

const Controls = () => {
  return (
    <ControlsContainer>
      <ControlsRow>
        <LeftControls>
          <ControlIcon className="material-symbols-outlined">undo</ControlIcon>
          <ControlIcon className="material-symbols-outlined">shuffle</ControlIcon>
        </LeftControls>

        <CenterControls>
          <ControlIcon className="material-symbols-outlined">skip_previous</ControlIcon>
          <ControlIcon className="material-symbols-outlined">play_circle</ControlIcon>
          <ControlIcon className="material-symbols-outlined">skip_next</ControlIcon>
        </CenterControls>

        <RightControls>
          <ControlIcon className="material-symbols-outlined">favorite</ControlIcon>

          <VolumeWrapper>
            <VolumeIcon className="material-symbols-outlined">volume_up</VolumeIcon>
            <VolumeBar />
          </VolumeWrapper>
        </RightControls>
      </ControlsRow>

      <TimelineRow>
        <TimeText>41:07</TimeText>

        <TimelineWrapper>
          <TimelineBar />
          <TimelineProgress />
        </TimelineWrapper>

        <TimeText>52:10</TimeText>
      </TimelineRow>
    </ControlsContainer>
  );
};

export default Controls;
