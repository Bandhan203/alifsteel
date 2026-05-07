import svgPaths from "./svg-d6t9zgmryp";
import imgFeaturedProduct from "./d8526e28d8a95ff9b693ff33dc0a47dc9fb2951d.png";
import imgProductImage2 from "./dbc91cb3bc2af6cbc704640aad61be07f5ae01a5.png";
import imgManufacturing from "./2d0d13262a5d9e2e21ec5033af20cd1572b2367c.png";
import imgAlifLogoSmall from "./d74d545a5d9248647132c2c5961bcd9f84ea9d1b.png";
import imgProductImage1 from "./b4f5892b30afdffc01e58948c326545017619fa0.png";
import imgProductImage3 from "./d69bab64075af79fad0bf49b6dd29299ce293ef2.png";
import imgWarehouseView1 from "./2a53d438f688305c612dff3be1257acdfd26a9b0.png";
import imgFacilityView from "./3ca2956628c37371ec1fe28742abcdaff543166d.png";
import imgProductionStock from "./c9a5804adf5e69ac235b6ab3eccd59675bde7337.png";

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">WHY CHOOSE US</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-center px-[16px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-[#2e7d32] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Margin />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[32px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Engineered for Perfection</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Our core features define the quality and reliability of our steel products.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[672px] relative shrink-0" data-name="Container">
      <Background />
      <Heading1 />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1528bd00} id="Vector" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1f2937] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">Superb Weather Resistance</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">
          <p className="leading-[26px] mb-0">Built to withstand the harshest environmental</p>
          <p className="leading-[26px]">conditions without degrading.</p>
        </div>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Feature 1">
      <div aria-hidden="true" className="absolute border-[#1f2937] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[26px] relative size-full">
        <Background1 />
        <Heading3 />
        <Container5 />
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p48d5200} id="Vector" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#1f2937] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg1 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">Excellent Insulation</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">
          <p className="leading-[26px] mb-0">Superior thermal properties to maintain optimal</p>
          <p className="leading-[26px]">internal temperatures.</p>
        </div>
      </div>
    </div>
  );
}

function Feature1() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Feature 2">
      <div aria-hidden="true" className="absolute border-[#1f2937] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[26px] relative size-full">
        <Background2 />
        <Heading4 />
        <Container6 />
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M5 13L9 17L19 7" id="Vector" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#1f2937] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg2 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">Easy Handling</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">
          <p className="leading-[26px] mb-0">Designed for efficient transportation and</p>
          <p className="leading-[26px]">streamlined installation processes.</p>
        </div>
      </div>
    </div>
  );
}

function Feature2() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Feature 3">
      <div aria-hidden="true" className="absolute border-[#1f2937] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[26px] relative size-full">
        <Background3 />
        <Heading5 />
        <Container7 />
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1c4d6800} id="Vector" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#1f2937] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg3 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">High Elasticity</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">
          <p className="leading-[26px] mb-0">Flexible enough for varied architectural</p>
          <p className="leading-[26px]">requirements while maintaining strength.</p>
        </div>
      </div>
    </div>
  );
}

function Feature3() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-start shrink-0" data-name="Feature 4">
      <div aria-hidden="true" className="absolute border-[#1f2937] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[26px] relative size-full">
        <Background4 />
        <Heading6 />
        <Container8 />
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p156ae100} id="Vector" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#1f2937] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg4 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">{`Tough & Durable`}</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">
          <p className="leading-[26px] mb-0">Long-lasting structural integrity for demanding</p>
          <p className="leading-[26px]">industrial applications.</p>
        </div>
      </div>
    </div>
  );
}

function Feature4() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-start shrink-0" data-name="Feature 5">
      <div aria-hidden="true" className="absolute border-[#1f2937] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[26px] relative size-full">
        <Background5 />
        <Heading7 />
        <Container9 />
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p24991e60} id="Vector" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#1f2937] relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg5 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">Prime Quality</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">
          <p className="leading-[26px] mb-0">Manufactured using premium grade materials</p>
          <p className="leading-[26px]">and rigorous quality control.</p>
        </div>
      </div>
    </div>
  );
}

function Feature5() {
  return (
    <div className="col-3 justify-self-stretch relative row-2 self-start shrink-0" data-name="Feature 6">
      <div aria-hidden="true" className="absolute border-[#1f2937] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[26px] relative size-full">
        <Background6 />
        <Heading8 />
        <Container10 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-x-[32px] gap-y-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__168px_168px] relative shrink-0 w-full" data-name="Container">
      <Feature />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[32px] relative size-full">
        <Container1 />
        <Container4 />
      </div>
    </div>
  );
}

function CoreFeaturesSectionRedesigned() {
  return (
    <div className="absolute bg-[#111827] content-stretch flex flex-col items-start left-0 py-[96px] right-0 top-[4870.59px]" data-name="Core Features Section (Redesigned)">
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[48px] tracking-[-0.96px] w-full">
        <p className="leading-[56px] mb-0">Building</p>
        <p>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[56px] text-[#2e7d32]">Excellence</span>
          <span className="leading-[56px]">{` in Steel`}</span>
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] relative shrink-0 w-[512px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[18px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">Quality, Durability, and Innovation in Every Sheet. Discover</p>
        <p className="leading-[28px]">the future of construction materials.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#2e7d32] relative rounded-[9999px] self-stretch shrink-0" data-name="Link">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Link:shadow" />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[24px]">Explore Our Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[9999px] self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">Contact Sales</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[16px] h-[66px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="col-0 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch max-w-[672px] relative row-0 self-center shrink-0" data-name="Container">
      <Heading />
      <Container14 />
      <Container15 />
    </div>
  );
}

function FeaturedProduct() {
  return (
    <div className="h-[438px] relative shrink-0 w-full" data-name="Featured Product">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-46%] max-w-none top-0 w-[192%]" src={imgFeaturedProduct} />
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">FEATURED</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <OverlayOverlayBlur />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[32px]">Advanced Color Coating Line</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p23f7a900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Svg6 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pf9ff300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Svg7 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bottom-[24px] content-stretch flex items-end justify-between left-[24px] right-[24px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function ModernCarouselPlaceholder() {
  return (
    <div className="bg-[rgba(255,255,255,0)] col-0 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative rounded-[16px] row-0 self-center shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0" data-name="Modern Carousel Placeholder">
      <FeaturedProduct />
      <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 to-[rgba(0,0,0,0)]" data-name="Gradient" />
      <Container16 />
    </div>
  );
}

function Container12() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_438px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <ModernCarouselPlaceholder />
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] max-w-[1280px] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[32px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function HeaderHeroSection() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 min-h-[4101.58984375px] overflow-clip pb-[1855.79px] pt-[1807.8px] right-0 top-[81px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(253, 251, 251) 0%, rgb(235, 237, 238) 100%)" }} data-name="Header - Hero Section">
      <div className="absolute inset-[-50%]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 2560 8203.2\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(429.67 0 0 429.67 1280 4101.6)\\'><stop stop-color=\\'rgba(255,165,115,0.4)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,200,150,0.1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(255,200,150,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
      <Container11 />
    </div>
  );
}

function AboutUsSectionRedesignedPaints() {
  return <div className="absolute bg-white inset-0" data-name="About Us Section (Redesigned) paints" />;
}

function ProductImage1() {
  return (
    <div className="aspect-[389.3299865722656/389.3299865722656] relative shrink-0 w-full" data-name="Product Image 2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProductImage2} />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Coating Process</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(17,24,39,0.8)] inset-[0_0.02px_-0.33px_0] items-end opacity-0 p-[24px] to-[rgba(17,24,39,0)] via-1/2 via-[rgba(17,24,39,0)]" data-name="Background">
      <Heading2 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-1 self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow">
      <ProductImage1 />
      <Background7 />
    </div>
  );
}

function Manufacturing() {
  return (
    <div className="col-2 h-[320px] justify-self-stretch relative rounded-[16px] row-1 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Manufacturing">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-full left-[-36%] max-w-none top-0 w-[172%]" src={imgManufacturing} />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_320px] relative shrink-0 w-full" data-name="Container">
      <OverlayShadow />
      <Manufacturing />
    </div>
  );
}

function AlifLogoSmall() {
  return (
    <div className="h-[48px] relative shrink-0 w-[169.41px]" data-name="Alif Logo Small">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAlifLogoSmall} />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white bottom-[-48px] content-stretch flex flex-col gap-[8px] items-start left-[-32px] p-[25px] rounded-[16px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <AlifLogoSmall />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Est. 2014</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[574.69px]" data-name="Container">
      <Container21 />
      <BackgroundBorder />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">OUR STORY</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center px-[16px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-[#2e7d32] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Margin1 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#111827] text-[32px] tracking-[-0.32px] w-full">
        <p className="leading-[40px] mb-0">Pioneering Excellence in Steel</p>
        <p className="leading-[40px]">Manufacturing</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <p className="leading-[26px] mb-0">Alif Steel Mills Ltd. Is A Latest Color Coated Steel Coils Industry</p>
        <p className="leading-[26px] mb-0">Established In 2014 With Specialized In Manufacturing Alu - Zinc Alloy</p>
        <p className="leading-[26px] mb-0">{`Coated " Alif Color Coil & Sheet " And The World Most Advanced And`}</p>
        <p className="leading-[26px] mb-0">Latest Technology Based Color Coating Line For Steel Coils And</p>
        <p className="leading-[26px]">Industrial Profile And Cl Sheets.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <p className="leading-[26px] mb-0">Alif Steel Mills Ltd. Has Varieties Of Sizes Of Galvalume And Nof Gi</p>
        <p className="leading-[26px] mb-0">Color Steel Coil And Sheets Which Is Available For The Clients. The</p>
        <p className="leading-[26px] mb-0">Size Ranges 0.120mm To 0.600mm In Thickness And 762mm To</p>
        <p className="leading-[26px] mb-0">{`1250mm In Width. Alif Color Coil & Sheets Has Excellent Decoration,`}</p>
        <p className="leading-[26px]">Formation And Corrosion Resistance.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p6561400} id="Vector" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2e7d32] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Learn more about our heritage</p>
      </div>
      <Svg8 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pl-[48px] relative shrink-0 w-[577.31px]" data-name="Container">
      <Background8 />
      <Heading9 />
      <Container23 />
      <Container26 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container22 />
    </div>
  );
}

function AboutUsSectionRedesigned() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip px-[32px] py-[96px] right-0 top-[4182.59px]" data-name="About Us Section (Redesigned)">
      <div className="absolute bg-[#f9fafb] inset-[0_0_0_66.67%]" data-name="Background" />
      <AboutUsSectionRedesignedPaints />
      <Container19 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">OUR PORTFOLIO</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <Container29 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-[#2e7d32] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Margin2 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#111827] text-[32px] text-center tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">{`Featured Products & Facilities`}</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px] mb-0">Explore our range of high-quality steel products and state-of-the-art</p>
        <p className="leading-[28px]">manufacturing facilities.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background9 />
      <Heading10 />
      <Container30 />
    </div>
  );
}

function ProductImage() {
  return (
    <div className="aspect-[389.3299865722656/389.3299865722656] relative shrink-0 w-full" data-name="Product Image 1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProductImage1} />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Corrugated Sheets</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(17,24,39,0.8)] inset-0 items-end opacity-0 p-[24px] to-[rgba(17,24,39,0)] via-1/2 via-[rgba(17,24,39,0)]" data-name="Background">
      <Heading11 />
    </div>
  );
}

function MasonryGridItems() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-0 overflow-clip right-[826.67px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[16px]" data-name="Masonry Grid Items">
      <ProductImage />
      <Background10 />
    </div>
  );
}

function ProductImage2() {
  return (
    <div className="aspect-[389.3299865722656/389.3299865722656] relative shrink-0 w-full" data-name="Product Image 2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProductImage2} />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Coating Process</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(17,24,39,0.8)] inset-0 items-end opacity-0 p-[24px] to-[rgba(17,24,39,0)] via-1/2 via-[rgba(17,24,39,0)]" data-name="Background">
      <Heading12 />
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-0 overflow-clip right-[826.67px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[429.33px]" data-name="Overlay+Shadow">
      <ProductImage2 />
      <Background11 />
    </div>
  );
}

function ProductImage3() {
  return (
    <div className="aspect-[389.3299865722656/389.3299865722656] relative shrink-0 w-full" data-name="Product Image 3">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProductImage3} />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Red Profile Sheets</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(17,24,39,0.8)] inset-0 items-end opacity-0 p-[24px] to-[rgba(17,24,39,0)] via-1/2 via-[rgba(17,24,39,0)]" data-name="Background">
      <Heading13 />
    </div>
  );
}

function OverlayShadow2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[413.33px] overflow-clip right-[413.34px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[16px]" data-name="Overlay+Shadow">
      <ProductImage3 />
      <Background12 />
    </div>
  );
}

function WarehouseView() {
  return (
    <div className="aspect-[389.3299865722656/152.0800018310547] relative shrink-0 w-full" data-name="Warehouse View 1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWarehouseView1} />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Modern Facility</p>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(17,24,39,0.8)] inset-[0.08px_0.33px_-0.08px_-0.33px] items-end opacity-0 p-[24px] to-[rgba(17,24,39,0)] via-1/2 via-[rgba(17,24,39,0)]" data-name="Background">
      <Heading14 />
    </div>
  );
}

function OverlayShadow3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[413.33px] overflow-clip right-[413.34px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[429.33px]" data-name="Overlay+Shadow">
      <WarehouseView />
      <Background13 />
    </div>
  );
}

function FacilityView() {
  return (
    <div className="aspect-[389.3299865722656/152.0800018310547] relative shrink-0 w-full" data-name="Facility View">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFacilityView} />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Factory Aerial View</p>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(17,24,39,0.8)] inset-0 items-end opacity-0 p-[24px] to-[rgba(17,24,39,0)] via-1/2 via-[rgba(17,24,39,0)]" data-name="Background">
      <Heading15 />
    </div>
  );
}

function OverlayShadow4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[413.33px] overflow-clip right-[413.34px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[605.41px]" data-name="Overlay+Shadow">
      <FacilityView />
      <Background14 />
    </div>
  );
}

function ProductionStock() {
  return (
    <div className="aspect-[389.3299865722656/389.3299865722656] relative shrink-0 w-full" data-name="Production Stock">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProductionStock} />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Coil Storage</p>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(17,24,39,0.8)] inset-0 items-end opacity-0 p-[24px] to-[rgba(17,24,39,0)] via-1/2 via-[rgba(17,24,39,0)]" data-name="Background">
      <Heading16 />
    </div>
  );
}

function OverlayShadow5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[826.66px] overflow-clip right-[0.01px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[16px]" data-name="Overlay+Shadow">
      <ProductionStock />
      <Background15 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[818.66px] relative shrink-0 w-full" data-name="Container">
      <MasonryGridItems />
      <OverlayShadow1 />
      <OverlayShadow2 />
      <OverlayShadow3 />
      <OverlayShadow4 />
      <OverlayShadow5 />
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[33px] py-[13px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">View Full Gallery</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link3 />
    </div>
  );
}

function Container27() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[32px] relative size-full">
        <Container28 />
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function ProductShowcaseSectionRedesigned() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 py-[96px] right-0 top-[5646.59px]" data-name="Product Showcase Section (Redesigned)">
      <Container27 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">GET IN TOUCH</p>
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-center px-[16px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-[#2e7d32] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Margin4 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Margin">
      <Background17 />
    </div>
  );
}

function MarginAlignFlexStart() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Margin:align-flex-start">
      <Margin3 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[32px] text-white tracking-[-0.32px] w-full">
        <p className="leading-[40px] mb-0">{`Let's Build Something Great`}</p>
        <p className="leading-[40px]">Together</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Heading 2:margin">
      <Heading17 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[18px] w-full">
        <p className="leading-[28px] mb-0">Have questions about our products or need a custom</p>
        <p className="leading-[28px] mb-0">quote? Fill out the form, and our dedicated team will get</p>
        <p className="leading-[28px]">back to you promptly.</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] relative shrink-0 w-full" data-name="Margin">
      <Container34 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pe96c750} id="Vector" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Svg9 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pr-[16px] relative shrink-0 w-[64px]" data-name="Margin">
      <Background18 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Email Us</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">info@alifsteel.com.bd</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[163.75px]" data-name="Container">
      <Heading18 />
      <Container38 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Margin6 />
      <Container37 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p467c778} id="Vector" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Svg10 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pr-[16px] relative shrink-0 w-[64px]" data-name="Margin">
      <Background19 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Call Us</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">+880 1708-445610</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[144.33px]" data-name="Container">
      <Heading19 />
      <Container41 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Margin7 />
      <Container40 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container39 />
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#111827] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[64px] py-[86px] relative size-full">
          <MarginAlignFlexStart />
          <Heading2Margin />
          <Margin5 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] w-full">
        <p className="leading-[20px]">Name / Company</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">John Doe</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[15px] relative size-full">
          <Container45 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] w-full">
        <p className="leading-[20px]">Phone Number</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">+880 1...</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[15px] relative size-full">
          <Container47 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Container43() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_78px] relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container46 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] w-full">
        <p className="leading-[20px]">Email Address</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">john@company.com</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[15px] relative size-full">
          <Container49 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] w-full">
        <p className="leading-[20px]">Your Message</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[24px]">How can we help you?</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[12px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-auto size-full">
        <div className="content-stretch flex flex-col items-start pb-[85px] pt-[13px] px-[17px] relative size-full">
          <Container51 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Textarea />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#2e7d32] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[33px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[24px]">Send Message</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form">
      <Container43 />
      <Container48 />
      <Container50 />
      <Button2 />
    </div>
  );
}

function Container42() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[80px] pt-[64px] px-[64px] relative size-full">
        <Form />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_580px] relative shrink-0 w-full" data-name="Container">
      <Background16 />
      <Container42 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Shadow">
      <Container33 />
    </div>
  );
}

function ContactSectionRedesigned() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col items-start left-0 px-[32px] py-[96px] right-0 top-[7215.25px]" data-name="Contact Section (Redesigned)">
      <BackgroundShadow />
    </div>
  );
}

function AlifLogoFooter() {
  return (
    <div className="h-[64px] max-w-[268px] relative rounded-[12px] shrink-0 w-[185.41px]" data-name="Alif Logo Footer">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-3/4 left-[-22.27%] max-w-none top-[12.5%] w-[144.54%]" src={imgAlifLogoSmall} />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.875px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">ALIF STEEL MILLS LTD established in</p>
        <p className="leading-[22.75px] mb-0">the year 2014, is a proud and promising</p>
        <p className="leading-[22.75px] mb-0">company manufacturing best quality</p>
        <p className="leading-[22.75px]">color steel.</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[23.125px] items-start pb-[13px] relative size-full">
        <AlifLogoFooter />
        <Container54 />
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">QUICK LINKS</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[20px]">Home</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[20px]">About Us</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[20px]">Our Products</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[20px]">Gallery</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[20px]">Contact</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Container55() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Heading20 />
        <List />
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">LOCATIONS</p>
      </div>
    </div>
  );
}

function Strong() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Strong">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] w-full">
        <p className="leading-[20px]">Corporate Office:</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Alif Tower (6th - 8th floor)</p>
        <p className="leading-[22.75px] mb-0">House # 49, Road # 03, Sector # 03</p>
        <p className="leading-[22.75px]">Uttara Model Town, Dhaka - 1230</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6.75px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Strong />
      <Container59 />
    </div>
  );
}

function Strong1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Strong">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] w-full">
        <p className="leading-[20px]">Factory Location:</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Pouni, Elenga</p>
        <p className="leading-[22.75px]">Kalihati, Tangail</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6.875px] items-start justify-self-stretch pb-[22.75px] relative row-1 self-start shrink-0" data-name="Container">
      <Strong1 />
      <Container61 />
    </div>
  );
}

function Container57() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_96.25px] relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Container60 />
    </div>
  );
}

function Container56() {
  return (
    <div className="col-[3/span_2] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[51.75px] relative size-full">
        <Heading21 />
        <Container57 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_192px] pb-[49px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1f2937] border-b border-solid inset-0 pointer-events-none" />
      <Container53 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">© 2024 Alif Steel Mills Ltd. All rights reserved.</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Developed by Fara IT Fusion</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container52() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[32px] relative size-full">
        <HorizontalBorder />
        <Container62 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#111827] content-stretch flex flex-col items-start left-0 pb-[64px] pt-[65px] right-0 top-[7987.25px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#1f2937] border-solid border-t inset-0 pointer-events-none" />
      <Container52 />
    </div>
  );
}

function BackgroundPatternSvg() {
  return <div className="absolute inset-0 opacity-10" data-name="Background Pattern → SVG" />;
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[60px] text-center text-white whitespace-nowrap">
        <p className="leading-[60px]">64</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dcfce7] text-[14px] text-center tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">DISTRICT COVERAGE</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative size-full">
        <Container67 />
        <Container68 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[0] relative size-full text-center text-white whitespace-nowrap">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%-9.31px)] text-[60px] top-[29.5px]">
          <p className="leading-[60px]">500</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+56.89px)] text-[30px] top-[39.5px]">
          <p className="leading-[36px]">+</p>
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dcfce7] text-[14px] text-center tracking-[0.7px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">EMPLOYEES</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[17px] pr-[16px] relative size-full">
        <Paragraph />
        <Container69 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[0] relative size-full text-center text-white whitespace-nowrap">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%-9.3px)] text-[60px] top-[29.5px]">
          <p className="leading-[60px]">120</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+50.83px)] text-[30px] top-[39.5px]">
          <p className="leading-[36px]">+</p>
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dcfce7] text-[14px] text-center tracking-[0.7px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">DEALERS</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[17px] pr-[16px] relative size-full">
        <Paragraph1 />
        <Container70 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[0] relative size-full text-center text-white whitespace-nowrap">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%-14.14px)] text-[60px] top-[29.5px]">
          <p className="leading-[60px]">24</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+36.41px)] text-[30px] top-[39.5px]">
          <p className="leading-[36px]">/7</p>
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dcfce7] text-[14px] text-center tracking-[0.7px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">SUPPORT</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[17px] pr-[16px] relative size-full">
        <Paragraph2 />
        <Container71 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_88px] relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <VerticalBorder />
      <VerticalBorder1 />
      <VerticalBorder2 />
    </div>
  );
}

function StatsSectionRedesigned() {
  return (
    <div className="absolute bg-[#2e7d32] content-stretch flex flex-col items-start left-0 overflow-clip px-[32px] py-[80px] right-0 top-[6967.25px]" data-name="Stats Section (Redesigned)">
      <BackgroundPatternSvg />
      <Container65 />
    </div>
  );
}

function AlifSteelMillsLogo() {
  return (
    <div className="h-[64px] relative shrink-0 w-[225.88px]" data-name="Alif Steel Mills Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAlifLogoSmall} />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Container">
      <AlifSteelMillsLogo />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2e7d32] text-[14px] tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[20px]">HOME</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[20px]">ABOUT</p>
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[20px]">PRODUCTS</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[20px]">GALLERY</p>
      </div>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[20px]">TEAM MEMBERS</p>
      </div>
    </div>
  );
}

function LinkMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[20px]">CONTACT US</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Container">
      <Link4 />
      <LinkMargin />
      <LinkMargin1 />
      <LinkMargin2 />
      <LinkMargin3 />
      <LinkMargin4 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start left-0 pb-px px-[32px] right-0 top-0" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container72 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <CoreFeaturesSectionRedesigned />
      <HeaderHeroSection />
      <AboutUsSectionRedesigned />
      <ProductShowcaseSectionRedesigned />
      <ContactSectionRedesigned />
      <Footer />
      <StatsSectionRedesigned />
      <Navigation />
    </div>
  );
}