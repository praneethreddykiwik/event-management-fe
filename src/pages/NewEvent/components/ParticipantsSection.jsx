import {
  ParticipantsCard,
  ParticipantsHeaderRow,
  HeaderLeft,
  CountBadge,
  MoreIcon,
  ParticipantsBody,
  ParticipantRow,
  Avatar,
  ParticipantDetails,
  ParticipantName,
  ParticipantActions,
  Icon,
  SeeAll,
} from "../NewEvent.styles";

import participant1 from "../../../assets/participant1.jpg";
import participant2 from "../../../assets/participant2.jpg";
import participant3 from "../../../assets/participant3.jpg";
import participant4 from "../../../assets/participant4.jpg";
import participant5 from "../../../assets/participant5.jpg";
import participant6 from "../../../assets/participant6.jpg";

import { EVENT_TEXT } from "../../../enum/EventText";

const ParticipantsSection = () => {
  const participants = [
    { img: participant1, name: "Alex Johnson" },
    { img: participant2, name: "Sarah Wilson" },
    { img: participant3, name: "David Smith" },
    { img: participant4, name: "Emily Carter" },
    { img: participant5, name: "Michael Brown" },
    { img: participant6, name: "Sophia Martinez" },
  ];

  return (
    <ParticipantsCard>
      <ParticipantsHeaderRow>
        <HeaderLeft>
          {EVENT_TEXT.PARTICIPANTS}
          <CountBadge>56</CountBadge>
        </HeaderLeft>

        <MoreIcon className="material-symbols-outlined">more_vert</MoreIcon>
      </ParticipantsHeaderRow>

      <ParticipantsBody>
        {participants.map((p, i) => (
          <ParticipantRow key={i}>
            <Avatar src={p.img} />

            <ParticipantDetails>
              <ParticipantName>{p.name}</ParticipantName>

              <ParticipantActions>
                <Icon className="material-symbols-outlined">mic</Icon>
                <Icon className="material-symbols-outlined">
                  video_camera_front_off
                </Icon>
              </ParticipantActions>
            </ParticipantDetails>
          </ParticipantRow>
        ))}

        <SeeAll>{EVENT_TEXT.SEE_ALL_PARTICIPANTS}</SeeAll>
      </ParticipantsBody>
    </ParticipantsCard>
  );
};

export default ParticipantsSection;
