import Link from "next/link";
import { memo } from "react";

import { Icon } from "@/components/common/Icon";
import { Photo } from "@/components/common/Photo";

/**
 * FIX
 * 1. Props 인터페이스 타입 명확하게 지정
 */
interface Props {
  meme: any;
}
export const MemeItem = memo(({ meme }: Props) => {
  return (
    <Link className="flex flex-col gap-6" href={`/meme/${meme.id}`}>
      <Photo className="rounded-15" src={meme.image_url} />
      <div className="flex items-center justify-between">
        <span className="text-12-bold-160">{meme.title}</span>
        <span className="flex items-center text-12-regular-160">
          <Icon name="memeShare" />
          {meme.share_count}
        </span>
      </div>
    </Link>
  );
});

MemeItem.displayName = "MemeItem";
