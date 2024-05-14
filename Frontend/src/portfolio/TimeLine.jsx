import { StarIcon } from '@heroicons/react/24/outline';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import bgImage from '../../public/assets/bg.jpg';

const TimelineComponent = ({ user }) => {
  return (
    <div id='Experience' className='flex justify-center items-center min-h-screen bg-no-repeat bg-cover' style={{backgroundImage: `url(${bgImage})`}}>
      <div className="max-w-screen-lg w-full px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-10">Experience</h1>
        <VerticalTimeline className="vertical-timeline" lineColor="rgb(7, 204, 391)">
          {user.timeline.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              icon={<StarIcon />}
              position={index % 2 === 0 ? "left" : "right"}
              className="timeline-element"
              contentArrowStyle={{ borderRight: '7px solid rgb(17, 24, 39)' }}
              contentStyle={{ background: 'rgba(17, 24, 39)', color: '#fff' }}
              iconStyle={{ background: 'rgb(17, 24, 39)', color: 'rgb(7, 204, 391)' }}
              textClassName="text-class"
              visible={true}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimelineComponent;
