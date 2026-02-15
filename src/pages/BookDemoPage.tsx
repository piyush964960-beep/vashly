import Navbar from "../components/Navbar";

export default function BookDemoPage() {
  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold">Book a Demo</h2>
        <p className="mt-4">We will contact you shortly.</p>
      </div>
    </>
  );
}
