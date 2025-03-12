import React from 'react'

const SectionElement = ({title, subTitle, children, padding}) => {
  return (
    <section className={`${padding}`}>
      <h2 className="text-[40px] font-IBM font-bold pt-[11px] text-center uppercase">{title}</h2>
      <p className="font-Sora text-[12px] text-[rgb(222,222,222)] text-center uppercase pt-2">{subTitle}</p>
      {children}
    </section>
  );
}

export default SectionElement