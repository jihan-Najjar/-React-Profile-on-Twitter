import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faChartColumn,
  faLink,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CommunicationIcon = () => {
  return (
    <div className="CommunicationIcon">
      <ul className="MovingInProfile-header">
        <li>
          <FontAwesomeIcon icon={faComment} />  46
        </li>
        <li>
          <FontAwesomeIcon icon={faRetweet} />
            675
        </li>
        <li>
          <FontAwesomeIcon icon={faHeart} />   3.701
        </li>
        <li>
          <FontAwesomeIcon icon={faChartColumn} />
          1.1m
        </li>
        <li>
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </li>
        {/* <li>
          <FontAwesomeIcon icon={faLink} />
        </li> */}
      </ul>
    </div>
  );
};

export default CommunicationIcon;
