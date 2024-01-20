import { css, tw } from "twind/css";
import Description from "@/components/Home/Description.tsx";

type GalleryItemProps = {
  title: string;
  description: string;
  image: string;
  basis?: string;
};

type GalleryProps = {
  list: GalleryItemProps[];
};

const ItemImage = (item: GalleryItemProps) => (
  <div
    className={tw(
      `flex relative overflow-hidden`,
      css`flex-basis:${item.basis}`,
    )}
  >
    <img
      className={tw(`w-full object-cover aspect-square`)}
      src={item.image}
    />
    <div
      class={tw(
        `absolute w-9/12 p-4 bg-black text-center bg-opacity-50 text-white top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%]`,
      )}
    >
      <h4 class={tw`text-2xl`}>{item.title}</h4>
      <p class={tw`text-xs`}>{item.description}</p>
    </div>
  </div>
);

const SectionGallery = (ctx: GalleryProps) => (
  <section className={tw(`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-16`)}>
    <div className={tw(`flex flex-col sm:flex-row gap-4`)}>
      <ItemImage
        title={ctx.list[0].title}
        description={ctx.list[0].description}
        image={ctx.list[0].image}
        basis="70%"
      />
      <div class={tw(`flex flex-col gap-4`, css`flex-basis:30%`)}>
        <ItemImage
          title={ctx.list[1].title}
          description={ctx.list[1].description}
          image={ctx.list[1].image}
          basis="50%"
        />
        <ItemImage
          title={ctx.list[2].title}
          description={ctx.list[2].description}
          image={ctx.list[2].image}
          basis="50%"
        />
      </div>
    </div>
    <div className={tw(`flex flex-col-res sm:flex-row gap-4 mt-4`)}>
      <div class={tw(`flex flex-col gap-4`, css`flex-basis:30%`)}>
        <ItemImage
          title={ctx.list[3].title}
          description={ctx.list[3].description}
          image={ctx.list[3].image}
          basis="50%"
        />
        <ItemImage
          title={ctx.list[4].title}
          description={ctx.list[4].description}
          image={ctx.list[4].image}
          basis="50%"
        />
      </div>
      <ItemImage
        title={ctx.list[5].title}
        description={ctx.list[5].description}
        image={ctx.list[5].image}
        basis="70%"
      />
    </div>
  </section>
);

export default SectionGallery;
