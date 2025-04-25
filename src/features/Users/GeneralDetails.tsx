import { useParams } from 'react-router-dom';
import { useUpdateStatus } from './useUpdateStatus';

import DetailInfo from '../../ui/DetailInfo';
import SectionDetail from '../../ui/SectionDetail';

import { formatPhoneNumber } from '../../utils/helpers';
import { UsersPropType } from '../../types';
import { formatPrice } from 'formatnumber-to-naira';

function GeneralDetails() {
  const { username } = useParams();
  const { usersUpdate } = useUpdateStatus();

  const selectedUser: UsersPropType =
    usersUpdate?.find((user: UsersPropType) => user.userName === username) ?? ({} as UsersPropType);

  return (
    <section className="border rounded-[0.4rem] border-transparent px-[2.5rem] bg-white divide-y-[0.1rem] divide-primary/10">
      <SectionDetail sectionTitle="Personal Information">
        <DetailInfo
          title="full name"
          value={`${selectedUser?.profile?.firstName} ${selectedUser?.profile?.lastName}`}
        />
        <DetailInfo title="phone number" value={formatPhoneNumber(selectedUser?.phoneNumber)} />
        <DetailInfo title="email address" value={selectedUser?.email?.toLowerCase()} />
        <DetailInfo title="bvn" value={'07060780922'} />
        <DetailInfo title="gender" value={selectedUser?.profile?.gender} />
        <DetailInfo title="marital status" value={'single'} />
        <DetailInfo title="children" value={'none'} />
        <DetailInfo title="type of residence" value={"parent's apartment"} />
      </SectionDetail>

      <SectionDetail sectionTitle="Education and Employment" className="lg:grid-cols-4">
        <DetailInfo title="level of education" value={selectedUser?.education?.level ?? ''} />
        <DetailInfo
          title="employment status"
          value={selectedUser?.education?.employmentStatus ?? ''}
        />
        <DetailInfo title="sector of employment" value={selectedUser?.education?.sector ?? ''} />
        <DetailInfo
          title="duration of employment"
          value={selectedUser?.education?.duration ?? ''}
        />
        <DetailInfo
          title="office email"
          value={selectedUser?.education?.officeEmail.toLowerCase() ?? ''}
        />
        <DetailInfo
          title="monthly income"
          value={`${formatPrice(+selectedUser?.education?.monthlyIncome[0])} - ${formatPrice(
            +selectedUser?.education?.monthlyIncome[1]
          )}`}
        />
        <DetailInfo
          title="loan repayment"
          value={formatPrice(+selectedUser?.education?.loanRepayment) ?? ''}
        />
      </SectionDetail>

      <SectionDetail sectionTitle="Socials">
        <DetailInfo title="twitter" value={selectedUser?.socials?.twitter ?? ''} />
        <DetailInfo title="facebook" value={selectedUser?.socials?.facebook ?? ''} />
        <DetailInfo title="instagram" value={selectedUser?.socials?.instagram ?? ''} />
      </SectionDetail>

      <SectionDetail sectionTitle="Guarantor">
        <DetailInfo
          title="full name"
          value={`${selectedUser?.guarantor?.firstName} ${selectedUser?.guarantor?.lastName}`}
        />
        <DetailInfo
          title="phone number"
          value={formatPhoneNumber(selectedUser?.guarantor?.phoneNumber ?? '')}
        />
        <DetailInfo
          title="email address"
          value={selectedUser?.guarantor?.address
            .replace(' ', '')
            .toLowerCase()
            .slice(0, 7)
            .padEnd(17, '@gmail.com')}
        />
        <DetailInfo title="relationship" value={'sister'} />
      </SectionDetail>
    </section>
  );
}

export default GeneralDetails;
