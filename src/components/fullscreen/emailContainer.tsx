import React from "react";
import { useSpring, animated } from "react-spring";
import { useFromRightToLeft } from "src/hooks/useFromRightToLeft";

type EmailItems = {
  from: string;
  time: string;
  subject: string;
  body: string;
  active: boolean;
};

const EmailLists: EmailItems[] = [
  {
    active: true,
    from: "Derek Atkins",
    body: "Hey when it comes to looking your best",
    subject: "Re: Photo Sheet",
    time: "8.23 AM",
  },
  {
    active: false,
    body: "Hi there. How's going since last time we met",
    from: "Logan Adams",
    subject: "Neko",
    time: "8.23 AM",
  },
  {
    active: false,
    body: "Dont be stupid to stuck with these bullies",
    from: "Allie Ward",
    subject: "Re: He",
    time: "8.23 AM",
  },
  {
    active: true,
    body: "Yes! Thanks for that man, I'd like to say",
    from: "Elmer Martinez",
    subject: "Re: Keep thinking",
    time: "8.23 AM",
  },
  {
    active: true,
    body: "I think that you get this easily",
    from: "John Paul",
    subject: "A job",
    time: "8.23 AM",
  },
  {
    active: false,
    from: "Noah Freeman",
    subject: "Re: Gmail",
    body: "Wow! Look at these new concept it seems nice",
    time: "8.23 AM",
  },
];

type EmailContainerProps = {
  showContent: boolean;
};

export const EmailContainer = ({ showContent }: EmailContainerProps) => {
  return (
    <div className="h-full max-w-[30%] shadow-container min-w-[20%]">
      <EmailTop showContent={showContent} />
      {showContent ? <Emails /> : null}
    </div>
  );
};

type EmailTopProps = {
  showContent: boolean;
};

const EmailTop = ({ showContent }: EmailTopProps) => {
  const { opacity, x } = useFromRightToLeft(1);

  return (
    <div className="px-4 py-4 bg-background-pink">
      {showContent ? (
        <animated.div
          className="grid grid email-heading gap-x-15 items-center"
          style={{ x, opacity }}
        >
          <h4 className="text-xs">Inbox</h4>
          <p className="text-base col-start-1 font-medium">7 new emails</p>
          <div className="col-start-2 row-start-1 row-end-3 bg-indigo-200 rounded-1/2  h-full">
            <img className="w-full h-full rounded-1/2" src="/user.jpg" />
          </div>
        </animated.div>
      ) : null}
    </div>
  );
};

const Emails = () => {
  return (
    <div className="h-full flex flex-col gap-y-8 py-4 text-background-pink overflow-hidden ">
      <div className="flex flex-col gap-y-3 ">
        <EmailHeading name={"TODAY"} />
        {EmailLists.map(({ active, body, from, subject, time }, i) => {
          return (
            <Email
              active={active}
              body={body}
              from={from}
              subject={subject}
              time={time}
              key={from}
              index={i}
            />
          );
        })}
      </div>
    </div>
  );
};

type EmailProps = {
  index: number;
} & EmailItems;

const Email = ({ active, body, from, subject, time, index }: EmailProps) => {
  const styles = useFromRightToLeft(index + 2);

  return (
    <div
      className={`border-l-3 ${
        active ? "border-background-pink" : "border-transparent"
      } text-black px-4`}
    >
      <animated.div style={{ ...styles }} className="flex flex-col gap-y-1">
        <div className="flex justify-between items-end">
          <span className="text-base font-semibold text-gray-800">{from}</span>
          <span className="text-xs font-medium text-gray-800">{time}</span>
        </div>
        <div className="text-xs truncate text-gray-400">{subject}</div>
        <div className="text-xs  truncate text-gray-400">{body}</div>
      </animated.div>
    </div>
  );
};

type EmailHeadingsProps = {
  name: string;
};

const EmailHeading = ({ name }: EmailHeadingsProps) => {
  return <h1 className="text-xs px-4">{name}</h1>;
};
