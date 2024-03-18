import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://www.techlead.vn/wp-content/uploads/2023/03/logo-TechLead_Outsuorcing.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">
								Công ty cổ phần Tech Lead
							</div>
							<div className="work-subtitle">
								Fullstack Developer
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<img
								src="https://daco.vn/images/logo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Công ty TNHH DACO</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
