import React from "react";
import useSWR, { mutate } from "swr";

import Button from "../components/Button";
import fetcher from "../lib/fetcher";

interface IProps {
  count: number;
  here: number;
}

const Index = (props: IProps) => {
  const { data, error, revalidate } = useSWR("/api/count", fetcher, {
    initialData: props
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="font-serif text-accent">hello, world! {data.count}</div>
      <div className="m-3">
        <Button
          onClick={() =>
            mutate("/api/count", updateCount(data.count + 1), false)
          }
        >
          increment
        </Button>
        <Button
          onClick={() =>
            mutate("/api/count", updateCount(data.count - 1), false)
          }
        >
          decrement
        </Button>
        <Button onClick={() => revalidate()}>reset</Button>
      </div>
    </div>
  );
};

const updateCount = (count: number): Promise<{ data: { count: number } }> => {
  return fetch("/api/count", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ count })
  }).then(res => res.json());
};

export default Index;
