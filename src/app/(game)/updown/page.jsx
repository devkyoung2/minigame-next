import Link from "next/link";
// import { metadata } from "../layout";

export default function page({ props }) {
  // metadata.title = "test";
  return (
    <>
      <div>{props}</div>
    </>
  );
}
