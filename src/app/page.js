import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../Components/Header/Header";
import SubHeader from "../../Components/SubHeader/SubHeader";
import Bookmarks from "../../Components/BookMarks/Bookmarks";
import FromPdf from "../../Components/FromPdf/FromPdf";
import ToPdf from "../../Components/ToPdf/ToPdf";
import Footer from "../../Components/Footer/Footer";
import WordSlider from "../../Components/WordSlider/WordSlider";

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
      <div className="p-4">
        <Bookmarks />
        <WordSlider />
        <FromPdf />
        <ToPdf />
      </div>
      <div className="pt-14">
        <Footer />
      </div>
    </>

  );
}
