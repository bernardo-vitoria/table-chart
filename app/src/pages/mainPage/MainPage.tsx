import { MenuBar, MetricsTable, Chart } from "pages/mainPage/components";
import { useState } from "react";
import { SubPagesNames } from "pages/mainPage";

const ComponentDetails = {
  table: <MetricsTable />,
  chart: <Chart />,
};

const MainPage = () => {
  const [subPageActive, setSubPageActive] = useState<SubPagesNames>(
    SubPagesNames.TABLE
  );

  return (
    <>
      <MenuBar subPage={subPageActive} setSubPage={setSubPageActive} />
      {ComponentDetails[subPageActive]}
    </>
  );
};

export default MainPage;
