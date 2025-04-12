import { useParams } from 'react-router-dom';
import DetailInfo from '../../ui/DetailInfo';
import SectionDetail from '../../ui/SectionDetail';
import { UsersPropType } from '../../types';
import { useUsers } from './useUsers';
import { formatPhoneNumber } from '../../utils/helpers';

function GeneralDetails() {
  const { userId } = useParams();
  const { users } = useUsers();

  const selectedUser: UsersPropType = users?.find((user: UsersPropType) => user.id === userId);

  return (
    <section className="border rounded-[0.4rem] border-transparent px-[2.5rem] bg-white divide-y-[0.1rem] divide-primary/10">
      <SectionDetail sectionTitle="Personal Information">
        <DetailInfo
          title="full name"
          value={`${selectedUser?.profile.firstName} ${selectedUser?.profile.lastName}`}
        />
        <DetailInfo title="phone number" value={formatPhoneNumber(selectedUser?.phoneNumber)} />
        <DetailInfo title="email address" value={selectedUser?.email} />
        <DetailInfo title="bvn" value={'07060780922'} />
        <DetailInfo title="gender" value={selectedUser?.profile.gender} />
        <DetailInfo title="marital status" value={'single'} />
        <DetailInfo title="children" value={'none'} />
        <DetailInfo title="type of residence" value={"parent's apartment"} />
      </SectionDetail>

      <SectionDetail sectionTitle="Education and Employment" style="grid-cols-4">
        <DetailInfo title="level of education" value={selectedUser?.education.level ?? ''} />
        <DetailInfo
          title="employment status"
          value={selectedUser?.education.employmentStatus ?? ''}
        />
        <DetailInfo title="sector of employment" value={selectedUser?.education.sector ?? ''} />
        <DetailInfo title="duration of employment" value={selectedUser?.education.duration ?? ''} />
        <DetailInfo title="office email" value={selectedUser?.education.officeEmail ?? ''} />
        <DetailInfo
          title="monthly income"
          value={`${selectedUser?.education.monthlyIncome[0]} - ${selectedUser?.education.monthlyIncome[1]}`}
        />
        <DetailInfo title="loan repayment" value={selectedUser?.education.loanRepayment ?? ''} />
      </SectionDetail>

      <SectionDetail sectionTitle="Socials">
        <DetailInfo title="twitter" value={selectedUser?.socials.twitter ?? ''} />
        <DetailInfo title="facebook" value={selectedUser?.socials.facebook ?? ''} />
        <DetailInfo title="instagram" value={selectedUser?.socials.instagram ?? ''} />
      </SectionDetail>

      <SectionDetail sectionTitle="Guarantor">
        <DetailInfo
          title="full name"
          value={`${selectedUser?.guarantor.firstName} ${selectedUser?.guarantor.lastName}`}
        />
        <DetailInfo
          title="phone number"
          value={formatPhoneNumber(selectedUser?.guarantor.phoneNumber ?? '')}
        />
        <DetailInfo
          title="email address"
          value={
            selectedUser?.guarantor.address ??
            ''.toLowerCase().split(' ')[1]?.padEnd(16, '@gmail.com')
          }
        />
        <DetailInfo title="relationship" value={'sister'} />
      </SectionDetail>
    </section>
  );
}

export default GeneralDetails;
