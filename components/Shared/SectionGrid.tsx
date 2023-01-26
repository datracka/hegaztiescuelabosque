import { css, tw } from "twind/css";

type GridCellProps = {
  alt: string;
  img: string;
};

type GridProps = {
  list: GridCellProps[];
};

const GridCell = (item: GridCellProps) => (
  <div
    className={tw(
      `w-[46%] sm:w-[21%] sm:flex-grow`,
      css`aspect-ratio:1/1`,
    )}
  >
    <img
      src={item.img}
      alt={item.alt}
      className={tw(`object-cover`, css`aspect-ratio:1/1`)}
    />
  </div>
);

const SectionGrid = ({ list }: GridProps) => (
  <section
    className={tw(
      `mx-auto max-w-7xl p-2 sm:p-6 lg:p-8 flex gap-4`,
      `flex-row flex-wrap`,
    )}
  >
    {list.map((item: GridCellProps) => <GridCell {...item} />)}
  </section>
);

export default SectionGrid;
