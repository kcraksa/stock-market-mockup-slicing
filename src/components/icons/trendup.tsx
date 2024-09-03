// create TrendUp icon component svg
const TrendUp = ({ size }: { size: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4375 2.625V5.625C11.4375 5.77418 11.3782 5.91726 11.2727 6.02275C11.1672 6.12824 11.0242 6.1875 10.875 6.1875C10.7258 6.1875 10.5827 6.12824 10.4772 6.02275C10.3717 5.91726 10.3125 5.77418 10.3125 5.625V3.98438L6.77295 7.52437C6.72069 7.57682 6.65859 7.61842 6.59022 7.64681C6.52185 7.6752 6.44854 7.68982 6.37451 7.68982C6.30048 7.68982 6.22717 7.6752 6.1588 7.64681C6.09043 7.61842 6.02833 7.57682 5.97607 7.52437L4.49998 6.04688L1.52295 9.02297C1.41728 9.12864 1.27395 9.18801 1.12451 9.18801C0.975068 9.18801 0.831746 9.12864 0.726073 9.02297C0.620401 8.9173 0.561035 8.77397 0.561035 8.62453C0.561035 8.47509 0.620401 8.33177 0.726073 8.22609L4.10107 4.85109C4.15333 4.79865 4.21543 4.75705 4.2838 4.72866C4.35217 4.70026 4.42548 4.68565 4.49951 4.68565C4.57354 4.68565 4.64685 4.70026 4.71522 4.72866C4.78359 4.75705 4.84569 4.79865 4.89795 4.85109L6.37498 6.32812L9.5156 3.1875H7.87498C7.7258 3.1875 7.58272 3.12824 7.47723 3.02275C7.37174 2.91726 7.31248 2.77418 7.31248 2.625C7.31248 2.47582 7.37174 2.33274 7.47723 2.22725C7.58272 2.12176 7.7258 2.0625 7.87498 2.0625H10.875C11.0242 2.0625 11.1672 2.12176 11.2727 2.22725C11.3782 2.33274 11.4375 2.47582 11.4375 2.625Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default TrendUp;