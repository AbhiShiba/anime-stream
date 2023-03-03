import React from "react";
import { PaginationComp } from "../PaginationComp/PaginationComp";
import { PlayList } from "../PlayList/PlayList";
import "./RecentAnimePage.css";

export function RecentAnimePage() {
  return (
    <>
      <div className="recent-page">
        <PlayList />
      </div>
      <PaginationComp pageType="recent-episodes" />
    </>
  );
}
