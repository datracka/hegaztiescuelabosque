# TODO

## Localization

Current status: It works by passing the Accept-Language from the client in the header. The backend gets the value and sets the getFixedT() to it.
No changing language is allow by now.

Example in _aside/deno-18next-http-middleware uses a sligthly different approach. uses ``.use(i18nextMiddleware.LanguageDetector)` (what we have also in i18n.ts file) somehow to get the language to render the pages. and it is switchable using urls ... 

translation method is i18n.t("key") (not fixed key)

At the moment I was not able to reproduce this behaviour in Hegazti.

- [ ] Understand how it works the _aside example and try to move it to Hegazti
- [ ] Why is working backend dependency there?

### Documentation

https://phrase.com/blog/posts/website-i18n-deno/
https://fresh.deno.dev/docs/concepts/middleware example middleware:
https://fresh.deno.dev/docs/examples/using-deno-kv-oauth

### Text Translation tasks 

There is a Sheet in drive.

- [ ] Translate Home To English
- [ ] Add English and Spanish Flags
- [ ] Translate Menu
- [ ] Translate Contact Form
- [ ] Add Badge for uncomplete translated sections to English to sorry (if
      english selected)
- [ ] Add english paths for all routing
- [ ] pass trough language parameter for all requests
- [ ] Solve Typescript error t is unknown
- [ ] Solve Issue with Backend Plugin on i18next dependency
- [ ] Issue with css`aspect-ratio:1/1` function in `SectionServices.tsx`
      basically there is a better way to add the aspect-ratio 1/1 than using the
      css function??

## Others

- [ ] Improvements SEO
  - [ ] Add alt / title to images
    - [z] Home (in process)
    - [x] Aula Madre
    - [x] Aula Infantil
    - [x] Aula Primaria
    - [x] Extraescolares - Ludoteca
    - [x] Extraescolares - Sabados en Familia
    - [x] Quienes Somos Espacios
    - [x] Quienes Somos Proyecto
    - [x] Quienes Somos Hegazti
    - [ ] Quienes Somos Faq
- [ ] Improvements performance
  - [ ] Resize Images
  - [ ] Images to webmp
- [ ] Add Analytics
- [ ] Redirect Email a Naroa
- [ ] Add SEO recommendations from chatGPT

Styling resources

- https://tailwindcomponents.com/
- https://tailwindui.com/components/preview
- https://headlessui.com/react/disclosure

- [ ] Fix it to preact
- [ ] fix it to twind
- [ ] Create layout so navbar is shared along all components
- [ ] Create state so we know which menu main option selected (not necessary)
- [ ] Hover when selecting an item in sub menu
- [ ] Create common Hero for all of them

https://stackoverflow.com/questions/66703855/how-can-i-localize-routes-with-the-nextjs-and-next-i18next-like-an-url-alias

- multiple paths and language... How localization paths would work in SEO?How to
  -autodetect language
