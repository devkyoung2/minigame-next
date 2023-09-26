import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <Link href='test'>
      <div>
        {/* <Image
      src='/images/profile.jpg' // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt='Your Name'
    ></Image> */}
        <p>go to test</p>
      </div>
    </Link>
  );
}
