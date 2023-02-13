import { css, tw } from "twind/css";

type ListItemProps = {
  title: string;
  description: string;
  img: string;
};

type ListProps = {
  list: ListItemProps[];
};

const ListItem = (item: ListItemProps) => (
  <div
    className={tw(
      `sm:w-[29%] sm:flex-grow mb-3 border-b-1`,
      css`aspect-ratio:1/1`,
    )}
  >
    <img
      src={item.img}
      alt={item.title}
      className={tw(`w-full object-cover`, css`aspect-ratio:1/1`)}
    />
    <h3 className={tw(`hegazti-h3  py-6`)}>{item.title}</h3>
    <p className={tw(`pb-6`)}>{item.description}</p>
  </div>
);

const SectionCardList = ({ list }: ListProps) => (
  <section
    className={tw(
      `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col gap-8`,
      `sm:flex-row sm:flex-wrap`,
    )}
  >
    {list.map((item: ListItemProps) => <ListItem {...item} />)}
  </section>
);

export default SectionCardList;
