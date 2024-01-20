import { css, tw } from "twind/css";

type ListItemProps = {
  testimonial: string;
  name: string;
};

type ListProps = {
  title: string;
  list: ListItemProps[];
};

const ListItem = (item: ListItemProps) => (
  <div
    className={tw(
      `sm:w-[29%] sm:flex-grow mb-3 border-b-1`,
      css`aspect-ratio:1/1`,
    )}
  >
    <p className={tw(`pb-6`)}>{item.testimonial}</p>
    <p className={tw(`py-6 font-bold`)}>{item.name}</p>
  </div>
);

const Opinions = ({ list, title }: ListProps) => {
  return (
    <section className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
      <h2 className={tw(`hegazti-h2  py-14 px-4 text-center mb-8`)}>
        {title}
      </h2>
      <div
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col gap-8`,
          `sm:flex-row sm:flex-wrap`,
        )}
      >
        {list.map((item: ListItemProps) => <ListItem {...item} />)}
      </div>
    </section>
  );
};

export default Opinions;
