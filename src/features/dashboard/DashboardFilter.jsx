import { useTranslation } from "react-i18next";
import Filter from "../../ui/Filter";

function DashboardFilter() {
  const { t } = useTranslation();
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: t('last-7-days') },
        { value: "30", label: t('last-30-days') },
        { value: "90", label: t('last-90-days') },
      ]}
    />
  );
}

export default DashboardFilter;
