import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Counter from "../../components/counter";
import Hero from "../../sections/hero";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <div>
        <p>Current locale: {lang}</p>
        <Hero dictionary={dictionary.homeSection} />
      </div>
    </>
  );
}
