import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "../components/UserCard";

const mock = [
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 22543,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 32423,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 225345432,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 53453,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 423423,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 424,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 42423,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 42343,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 423432,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 4234234,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 423423,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 2244432,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 222333,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 24422,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 22442,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 5522266,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 552222,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 255522,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 25522,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
  {
    display_name: "Abdul",
    profile_image: "dadw",
    reputation: 22,
    account_id: 255223,
    badge_counts: {
      gold: 222,
      silver: 343,
      bronze: 4333,
    },
  },
];

test("Users must be 20", () => {
  render(
    <>
      {mock.map((u) => (
        <UserCard key={u.account_id} user={u} />
      ))}
    </>
  );
  const userCard = screen.getAllByTestId("user-card");
  expect(userCard).toHaveLength(20);
});
