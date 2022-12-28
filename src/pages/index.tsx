import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Suspense } from "react";

import { Navigation } from "@/components/common/Navigation";
import { HomePopular } from "@/components/home/HomePopular";
import { SearchInput } from "@/components/search";

import Avatar from "../../public/img/Avatar.png";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Navigation page="intro" />
      <div className="flex justify-center">
        <Image alt="brandimage" placeholder="blur" src={Avatar} />
      </div>
      <SearchInput
        placeholder="당신이 찾는 밈 여기 있다."
        onClick={() => {
          router.push("/search");
        }}
      />

      <div className="mt-60 mb-13 text-center text-regular">인기검색어</div>
      <Suspense fallback={<div className="text-title">loading</div>}>
        <div className="flex flex-row flex-wrap justify-center px-36">
          <HomePopular />
        </div>
      </Suspense>
      <div className="text-center text-title">어쩌면 당신이 찾았을 밈</div>
    </>
  );
};

export default Home;
