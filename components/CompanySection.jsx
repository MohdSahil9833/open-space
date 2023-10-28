import Image from 'next/image';

export default function CompanySection() {
  return (
    <div className="py-4 bg-zinc-100">
      <p className="py-4 text-lg font-medium text-center opacity-40">
        Elevate your business with our commercial interior design expertise.
        First impressions matter, and your office or commercial space is a
        powerful influencer.We create environments that foster productivity,
        inspire creativity, and exude professionalism. Let us transform your
        workspace into a reflection of your company's success.
      </p>
      <div className="container flex flex-wrap items-center justify-between">
        <Image
          src="/image/air-company-logo.png"
          width={128}
          height={128}
          alt=""
          className="opacity-40"
        />
        <Image
          src="/image/nike.png"
          width={128}
          height={128}
          alt=""
          className="opacity-40"
        />
        <Image
          src="/image/samsung.png"
          width={128}
          height={128}
          alt=""
          className="opacity-40"
        />
        <Image
          src="/image/amazon-pay.png"
          width={128}
          height={128}
          alt=""
          className="opacity-40"
        />
      </div>
    </div>
  );
}
