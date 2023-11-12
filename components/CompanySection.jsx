import Image from 'next/image';

export default function CompanySection() {
  return (
    <div className="py-4 bg-zinc-100">
      <p className="py-4 text-lg font-medium text-center opacity-40">
        Elevate your business with our commercial interior design expertise.
        First impressions matter, and your office or commercial space is a
        powerful influencer.We create environments that foster productivity,
        inspire creativity, and exude professionalism. Let us transform your
        workspace into a reflection of your company&apos;s success.
      </p>
      <div className="container flex flex-wrap items-center justify-between">
        <Image
          src="/image/int1.png"
          width={128}
          height={128}
          alt=""
          className="opacity-40"
        />
        <Image
          src="/image/co2.png"
          width={128}
          height={128}
          alt=""
          className="opacity-40"
        />
        <Image
          src="/image/ac1.png"
          width={128}
          height={128}
          alt=""
          className="opacity-40"
        />
        <Image
          src="/image/ac2.png"
          width={128}
          height={128}
          alt=""
          className="opacity-40"
        />
      </div>
    </div>
  );
}
