# TODO

## Localization

- [ ] Fix issue with form & apply a conditional rendering in dev
  - [x] Load envs from .env in handler
  - [x] Add middleware to handle GET request !()[**https://fresh.deno.dev/docs/concepts/middleware]
  - [ ] Then I have ctx available everywhere! Use it and stop propagating props.
- [x] Translate Extraescolares Text
- [x] Translate mas-information
- [x] Translate Footer
- [x] Translate The forest as classroom > DayTime Mother
- [x] Translate The forest as classroom > Preschool Classroom
- [x] Translate The forest as classroom > Primary School
- [x] Translate The forest as classroom > Extracurriculars - Playroom
- [ ] Translate Who we are > Project
- [ ] Translate Who we are > Nature and Spaces
- [ ] Translate Who we are > A Day in Hegazti
- [ ] Translate Who we are > Frequently Asked Questions
- [x] Translate Contact
- [ ] translate cookies policy
- [ ] translate privacy policy
- [ ] Make than url linking is english when english languange and spanish when spanish language

## Steps to localize, given a page

- Fix issues with Props in Components
- Write in the i18n.ts (spanish json) the keys to use for each page
- Copy texts from templates into json
- pass keys and text to excel
- Replace text by keys in template
- Add keys to English Josn
- Translate them with ChatGPT and replace

## Localization: The problem for the future

- [ ] make 18next_fs_backend@v2.3.0 work in i18n.ts so I can add translation in folders
- [ ] understand why i18nextMiddleware.LanguageDetector does not work. learn i18next
- [ ] learn (check localekit & [localekit](https://github.com/brocococonut/freshlate))
- [ ] If i18nextMiddleware.LanguageDetector works then we can add language selection on URL. Then add flags switch logic

Current status: It works by passing the Accept-Language from the client in the header. The backend gets the value and sets the getFixedT() to it.
No changing language is allow by now.

in _aside/deno-18next-http-middleware uses ``.use(i18nextMiddleware.LanguageDetector)` and detects the language from url.
In our case it does not work. I guess it is something missconfigured or Fresh has something to say there.

- [ ] To undersnd it: Create a Deno Project and install i18next following: https://locize.com/blog/i18n-for-deno-with-i18next/ it should work like the _aside project. Then do the same with a fresh project.  

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
