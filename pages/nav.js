import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/blackjack">Blackjack</Link>
        </li>
        <li>
          <Link href="/texasholdem">Texas Holdem</Link>
        </li>
      </ul>
    </div>
  );
}
