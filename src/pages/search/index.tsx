import { useInput, useRecentSearch } from "@/application/hooks";
import { Navigation } from "@/components/common/Navigation";
import { SearchInput, SearchPopular, SearchRecent, SearchResultList } from "@/components/search";

const SearchPage = () => {
  const inputProps = useInput();
  const { keywords, onClickAddKeyword, onClickDeleteKeyword } = useRecentSearch();

  return (
    <>
      <Navigation page="search" />
      <SearchInput
        {...inputProps}
        placeholder="당신이 찾는 밈, 여기 있다."
        spellCheck={false}
        text={inputProps.value}
        type="text"
        onReset={inputProps.onReset}
        onSearch={onClickAddKeyword}
      />
      {inputProps.value ? (
        <SearchResultList value={inputProps.value} onClickAddKeyword={onClickAddKeyword} />
      ) : (
        <div className="px-14">
          {keywords.length && (
            <SearchRecent keywords={keywords} onClickDeleteKeyword={onClickDeleteKeyword} />
          )}
          <SearchPopular />
        </div>
      )}
    </>
  );
};

export default SearchPage;
