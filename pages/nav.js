import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/blackjack">
            <a>Blackjack</a>
          </Link>
          <Link href="/texasholdem">
            <a>Texas Holdem</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
