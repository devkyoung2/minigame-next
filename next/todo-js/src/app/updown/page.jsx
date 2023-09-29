import Link from "next/link";
import { metadata } from "../layout";

export default function page() {
  metadata.title = "test";
  return (
    <>
      <div>Up❓ Down❓</div>
    </>
  );
}
