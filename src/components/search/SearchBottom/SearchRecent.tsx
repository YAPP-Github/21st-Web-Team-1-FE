import Chip from "@/components/common/Chip";
import type { ISearchKeyword } from "@/types";

interface Props {
  keywords: ISearchKeyword[];
  handleDeleteKeywords: () => void;
}

export const SearchRecent = ({ keywords, handleDeleteKeywords }: Props) => {
  return (
    <>
      <div className="flex justify-between">
        <span className="text-semi-bold text-[1.4rem] text-dark-gray-10">최근 검색어</span>
        <span className="text-semi-bold text-[1.4rem] text-gray-10" onClick={handleDeleteKeywords}>
          지우기
        </span>
      </div>
      <div className="flex flex-wrap align-middle">
        {keywords.map((keyword) => (
          <Chip key={keyword.id} label={keyword.text} type="recent" size="medium" className="m-4" />
        ))}
      </div>
    </>
  );
};