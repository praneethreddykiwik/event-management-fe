// src/components/PlayerCard/PlayerCard.jsx
import React from "react";
import styled from "styled-components";
import ev from "../../assets/ev.jpeg";

const PlayerCard = () => {
  return (
    <CardWrapper>
      <Banner>
        <BannerInner>
          <TopRow>
            <TopLeftGroup>
              <StatusDot />
              <PastEventsText>Past Events</PastEventsText>
              <ShareButton aria-label="Share">
                <span class="material-symbols-outlined">share</span>
              </ShareButton>
            </TopLeftGroup>

            <FullscreenButton aria-label="Fullscreen">⤢</FullscreenButton>
          </TopRow>

          <BottomLeftText>
            <Title>
              Shell Hall, Muson Center,
              <br />
              Lagos, Nigeria
            </Title>
            <DateText>Friday, 30 Feb. 2023 at 01:00</DateText>
          </BottomLeftText>
        </BannerInner>
      </Banner>

      <PlayerSection>
        <ControlsRow>
          <SideLeft>
            <SmallIconButton aria-label="Playlist">≡</SmallIconButton>
            <SmallIconButton aria-label="Switch event">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z" />
              </svg>
            </SmallIconButton>
          </SideLeft>

          <CenterControls>
            <SmallIconButton aria-label="Previous track">⏮</SmallIconButton>
            <PlayButton aria-label="Play">▶</PlayButton>
            <SmallIconButton aria-label="Next track">⏭</SmallIconButton>
          </CenterControls>

          <SideRight>
            <HeartButton aria-label="Favourite">♡</HeartButton>

            <VolumeGroup>
              <VolumeIcon>🔊</VolumeIcon>
              <VolumeBar>
                <VolumeFill />
              </VolumeBar>
            </VolumeGroup>
          </SideRight>
        </ControlsRow>

        <ProgressRow>
          <ProgressWrapper>
            <ProgressTrack>
              <ProgressFill />
            </ProgressTrack>

            <ProgressTimes>
              <TimeText>41:07</TimeText>
              <TimeText>52:10</TimeText>
            </ProgressTimes>
          </ProgressWrapper>
        </ProgressRow>
      </PlayerSection>
    </CardWrapper>
  );
};

export default PlayerCard;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.65);
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  background-image: url(${ev});
  background-size: cover;
  background-position: center;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
`;

export const BannerInner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 24px 28px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopRow = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 725px;
`;

export const TopLeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StatusDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22d6ff;
  box-shadow: 0 0 10px #22d6ff;
`;

export const PastEventsText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #22d6ff;
`;

export const ShareButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: #22d6ff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FullscreenButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.35);
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BottomLeftText = styled.div`
  color: #ffffff;
  margin-bottom: 4px;
`;

export const Title = styled.h1`
  justify-content: left;
  display: flex;
  /* justify-items: center; */
  position: absolute;
  top: 130px;
  text-align: justify;
  margin: 0 0 10px 0;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.15;
`;

export const DateText = styled.p`
  justify-content: left;
  display: flex;
  /* justify-items: center; */
  position: absolute;
  top: 208px;
  text-align: justify;
  margin: 0;
  font-size: 15px;
  color: #d3d7e8;
`;

export const PlayerSection = styled.div`
  background: #ffffff;
  padding: 14px 24px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SideLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 80px;
`;

export const SideRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 150px;
  justify-content: flex-end;
`;

export const CenterControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const SmallIconButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: #8e92a3;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PlayButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: #222435;
  color: #ffffff;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
`;

export const HeartButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid #e1e2f0;
  background: #ffffff;
  color: #9b9fb1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const VolumeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const VolumeIcon = styled.span`
  font-size: 14px;
`;

export const VolumeBar = styled.div`
  width: 90px;
  height: 4px;
  border-radius: 999px;
  background: #e6e7f2;
  overflow: hidden;
  position: relative;
`;
export const VolumeFill = styled.div`
  position: absolute;
  inset: 0;
  width: 60%;
  background: #100577;
`;

export const ProgressRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProgressWrapper = styled.div`
  width: 100%;
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: #e6e7f2;
  overflow: hidden;
  position: relative;
`;

export const ProgressFill = styled.div`
  position: absolute;
  inset: 0;
  width: 75%;
  background: #100577;
`;

export const ProgressTimes = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #8e92a3;
`;

export const TimeText = styled.span``;
