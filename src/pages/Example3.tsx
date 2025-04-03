import React from "react";

type CardProps = {
  title: string;
};

// export default function Example3({ title }: CardProps) {

export default function Example3(props: CardProps) {
  //   props.title = "Hello World!";
  return <div>{props.title}</div>;
}
