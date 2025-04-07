import DetailInfo from '../../ui/DetailInfo';
import SectionDetail from '../../ui/SectionDetail';

function GeneralDetails() {
  return (
    <section className="border rounded-[0.4rem] border-transparent px-[2.5rem] bg-white divide-y-[0.1rem] divide-primary/10">
      <SectionDetail sectionTitle="Personal Information">
        <DetailInfo title="full name" value={'Grace Effiom'} />
        <DetailInfo title="phone number" value={'07060780922'} />
        <DetailInfo title="email address" value={'grace@gmail.com'} />
        <DetailInfo title="bvn" value={'07060780922'} />
        <DetailInfo title="gender" value={'female'} />
        <DetailInfo title="marital status" value={'single'} />
        <DetailInfo title="children" value={'none'} />
        <DetailInfo title="type of residence" value={"parent's apartment"} />
      </SectionDetail>

      <SectionDetail sectionTitle="Education and Employment" style="grid-cols-4">
        <DetailInfo title="level of education" value={'B.Sc'} />
        <DetailInfo title="employment status" value={'employed'} />
        <DetailInfo title="sector of employment" value={'fintech'} />
        <DetailInfo title="duration of employment" value={'2 year'} />
        <DetailInfo title="office email" value={'grace@lendsqr.com'} />
        <DetailInfo title="monthly income" value={'200000 - 400000'} />
        <DetailInfo title="loan repayment" value={'40000'} />
      </SectionDetail>

      <SectionDetail sectionTitle="Socials">
        <DetailInfo title="twitter" value={'@grace_effiom'} />
        <DetailInfo title="facebook" value={'Grace Effiom'} />
        <DetailInfo title="instagram" value={'@grace_effiom'} />
      </SectionDetail>

      <SectionDetail sectionTitle="Guarantor">
        <DetailInfo title="full name" value={'Debby Ogana'} />
        <DetailInfo title="phone number" value={'07060780922'} />
        <DetailInfo title="email address" value={'debby@gmail.com'} />
        <DetailInfo title="relationship" value={'sister'} />
      </SectionDetail>
    </section>
  );
}

export default GeneralDetails;
