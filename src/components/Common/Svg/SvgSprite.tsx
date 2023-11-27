const SvgSprite = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" display="none">
      <symbol id="recipe" viewBox="0 0 22 26">
        <path d="M20.675 12.44c-.324-.604-.643-1.123-.868-1.533a5.058 5.058 0 0 1-.256-.516.808.808 0 0 1-.068-.244v-.005.001a.311.311 0 0 1 .054-.168.344.344 0 0 1 .116-.096.83.83 0 0 1 .135-.06l.096.045.25-.053c.53-.111.904-.529.904-1.011V7.733c0-.813-.743-1.47-1.662-1.471h-2.668c-.23-.425-.717-.72-1.284-.72h-4.035c-.567 0-1.053.296-1.284.72H8.23c-.203-.737-.762-2.216-2.261-4.017A8.064 8.064 0 0 0 4.489.91 5.94 5.94 0 0 0 3.376.287 3.487 3.487 0 0 0 2.051 0 2.454 2.454 0 0 0 .86.297a1.61 1.61 0 0 0-.664.677A1.779 1.779 0 0 0 0 1.801c0 .34.086.68.259.998.172.316.436.61.799.825.818.483 1.589 1.076 2.155 1.67.32.332.564.665.73.968h-.019c-.917 0-1.66.658-1.66 1.47v1.064c0 .487.381.907.915 1.014l.267.053.076-.04a.78.78 0 0 1 .112.049.363.363 0 0 1 .128.1.31.31 0 0 1 .057.173v.001a.77.77 0 0 1-.068.245c-.095.239-.296.596-.544 1.022-.742 1.285-1.904 3.225-1.905 5.645 0 .157.004.316.015.477.13 2.033.929 4.141 2.613 5.762C5.61 24.92 8.183 26.006 11.65 26c3.468.006 6.04-1.08 7.722-2.703 1.684-1.62 2.482-3.73 2.614-5.762.01-.161.014-.32.014-.477 0-1.844-.677-3.409-1.325-4.618zm-1.012-4.707v.866c-.221.026-.471.1-.733.245-.048.026-.093.064-.14.096h-1.937V7.48h2.523c.159 0 .287.113.287.253zM1.82 2.61a.886.886 0 0 1-.324-.342.991.991 0 0 1-.122-.468.7.7 0 0 1 .07-.318.346.346 0 0 1 .14-.151.938.938 0 0 1 .466-.115c.206 0 .464.057.742.173.417.171.864.469 1.238.775.374.304.68.62.831.802.97 1.167 1.5 2.17 1.786 2.87.058.142.104.269.144.385H5.405c-.216-.6-.628-1.168-1.142-1.712-.67-.702-1.525-1.356-2.442-1.899zm1.818 5.986v-.864c0-.14.128-.253.285-.254H9.96v1.46H4.512c-.062-.041-.124-.088-.188-.12a2.03 2.03 0 0 0-.685-.222zm16.974 8.869c-.115 1.804-.83 3.64-2.253 5.006-1.425 1.363-3.554 2.305-6.71 2.31-3.154-.005-5.283-.947-6.709-2.31-1.423-1.365-2.137-3.202-2.251-5.006a6.281 6.281 0 0 1-.014-.408c0-1.575.582-2.958 1.193-4.096.305-.57.615-1.074.862-1.521.123-.225.231-.435.315-.643.082-.208.146-.414.147-.652l-.002-.083a1.497 1.497 0 0 0-.06-.312h4.83v2.925c0 .531.49.962 1.09.962.6 0 1.091-.43 1.091-.962v-.621c0-.531.49-.966 1.09-.966.602 0 1.092.435 1.092.966v1.838c0 .617.564 1.12 1.265 1.12.696 0 1.265-.503 1.265-1.12V9.751h1.318c-.03.1-.052.203-.06.31l-.003.085c.002.239.065.444.148.652.147.362.367.74.616 1.171.749 1.286 1.756 3.022 1.753 5.09 0 .134-.003.27-.012.407z" />
      </symbol>
      <symbol id="list" viewBox="0 0 18 14">
        <path d="M0 0h18v2H0zm0 6h18v2H0zm0 6h18v2H0z" />
      </symbol>
      <symbol id="member" viewBox="0 0 20 20">
        <path d="M5.5 5.042A4.665 4.665 0 0 1 10.167.375a4.665 4.665 0 0 1 4.666 4.667 4.665 4.665 0 0 1-4.666 4.666A4.665 4.665 0 0 1 5.5 5.042zM.833 16.708c0-3.103 6.219-4.666 9.334-4.666 3.115 0 9.333 1.563 9.333 4.666v2.334H.833v-2.334z" />
      </symbol>
      <symbol id="search" viewBox="0 0 22 22">
        <path d="M15.723 13.836h-.993l-.353-.34a8.14 8.14 0 0 0 1.975-5.32A8.176 8.176 0 0 0 8.176 0 8.176 8.176 0 0 0 0 8.176a8.176 8.176 0 0 0 8.176 8.176 8.14 8.14 0 0 0 5.32-1.975l.34.353v.993L20.127 22 22 20.126l-6.277-6.29zm-7.547 0a5.653 5.653 0 0 1-5.66-5.66 5.653 5.653 0 0 1 5.66-5.66 5.653 5.653 0 0 1 5.66 5.66 5.653 5.653 0 0 1-5.66 5.66z" />
      </symbol>
      <symbol id="arrow" viewBox="0 0 8 12">
        <path d="M7.41 10.59L2.83 6l4.58-4.59L6 0 0 6l6 6 1.41-1.41z" />
      </symbol>
      <symbol id="bookmark" viewBox="0 0 20 24">
        <path d="M17.143 0H2.857C1.286 0 .014 1.2.014 2.667L0 24l10-4 10 4V2.667C20 1.2 18.714 0 17.143 0zm0 20L10 17.093 2.857 20V2.667h14.286V20z" />
      </symbol>
      <symbol id="bookmarkFilled" viewBox="0 0 14 18">
        <path d="M12 0H2C.9 0 .01.9.01 2L0 18l7-3 7 3V2c0-1.1-.9-2-2-2z" />
      </symbol>
      <symbol id="review" viewBox="0 0 14 14">
        <g clipPath="url(#a)">
          <path d="M11.667 1.167H2.333a1.17 1.17 0 0 0-1.166 1.166v10.5L3.5 10.5h8.167a1.17 1.17 0 0 0 1.166-1.167v-7a1.17 1.17 0 0 0-1.166-1.166zm0 8.166H3.016l-.683.683V2.333h9.334v7zM4.083 5.25H5.25v1.167H4.083V5.25zm4.667 0h1.167v1.167H8.75V5.25zm-2.333 0h1.166v1.167H6.417V5.25z" />
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0h14v14H0z" />
          </clipPath>
        </defs>
      </symbol>
      <symbol id="home" viewBox="0 0 26 22">
        <path d="M10.4 22v-7.765h5.2V22h6.5V11.647H26L13 0 0 11.647h3.9V22h6.5z" />
      </symbol>
      <symbol id="star" viewBox="0 0 24 24">
        <path d="M17.562 21.56c-.162 0-.321-.04-.465-.115L12 18.765l-5.097 2.68a1 1 0 0 1-1.451-1.054l.973-5.676-4.123-4.02a1 1 0 0 1 .554-1.705l5.699-.828 2.548-5.164a1.042 1.042 0 0 1 1.794 0l2.548 5.164 5.699.828a1 1 0 0 1 .554 1.706l-4.123 4.019.973 5.675a1 1 0 0 1-.986 1.17z" />
        <path d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828-2.548-5.164A.979.979 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676 4.123-4.02a1 1 0 0 0 .253-1.025z" />
      </symbol>
      <symbol id="sort" viewBox="0 0 10 13">
        <path d="M6.39 7.812l-.014 4.205 1.416.004.014-4.205 2.126.006L7.106 5.42 4.264 7.806l2.126.006zm-.697-3.589l-2.125-.006.014-4.205L2.165.01l-.014 4.205-2.125-.006 2.826 2.4 2.841-2.385z" />
      </symbol>
      <symbol id="sort" viewBox="0 0 10 13">
        <path d="M6.39 7.812l-.014 4.205 1.416.004.014-4.205 2.126.006L7.106 5.42 4.264 7.806l2.126.006zm-.697-3.589l-2.125-.006.014-4.205L2.165.01l-.014 4.205-2.125-.006 2.826 2.4 2.841-2.385z" />
      </symbol>
      <symbol id="favorite" viewBox="0 0 20 19">
        <path d="M14.5 0c-1.74 0-3.41.81-4.5 2.09C8.91.81 7.24 0 5.5 0 2.42 0 0 2.42 0 5.5c0 3.78 3.4 6.86 8.55 11.54L10 18.35l1.45-1.32C16.6 12.36 20 9.28 20 5.5 20 2.42 17.58 0 14.5 0zm-4.4 15.55l-.1.1-.1-.1C5.14 11.24 2 8.39 2 5.5 2 3.5 3.5 2 5.5 2c1.54 0 3.04.99 3.57 2.36h1.87C11.46 2.99 12.96 2 14.5 2c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
      </symbol>
      <symbol id="favoriteFilled" viewBox="0 0 20 19">
        <path d="M10 18.35l-1.45-1.32C3.4 12.36 0 9.28 0 5.5 0 2.42 2.42 0 5.5 0 7.24 0 8.91.81 10 2.09 11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 3.78-3.4 6.86-8.55 11.54L10 18.35z" />
      </symbol>
      <symbol id="kakao" viewBox="0 0 16 15">
        <path
          fill="#000000"
          fillRule="evenodd"
          d="M.5 6.56c0 2.15 1.389 4.04 3.48 5.116l-.706 2.7a.223.223 0 0 0 .052.226.212.212 0 0 0 .285.018l3.04-2.1c.438.065.889.098 1.349.098 4.142 0 7.5-2.712 7.5-6.059C15.5 3.213 12.142.5 8 .5 3.858.5.5 3.213.5 6.56z"
          clipRule="evenodd"
        />
      </symbol>
      <symbol id="close" viewBox="0 0 20 20">
        <path d="M20 2.014L17.986 0 10 7.986 2.014 0 0 2.014 7.986 10 0 17.986 2.014 20 10 12.014 17.986 20 20 17.986 12.014 10 20 2.014z" />
      </symbol>
      <symbol id="triangle" viewBox="0 0 22 16">
        <path d="M0 16L11 0l11 16H0z" />
      </symbol>
      <symbol id="plus" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" />
      </symbol>
      <symbol viewBox="0 0 24 24" id="pencil">
        <path d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z" />
      </symbol>
      <symbol viewBox="0 0 24 24" id="camera">
        <path d="M3 4V1h2v3h3v2H5v3H3V6H0V4m6 6V7h3V4h7l1.8 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10m10 9c4.45 0 6.69-5.38 3.54-8.54C13.39 7.31 8 9.55 8 14c0 2.76 2.24 5 5 5m-3.2-5c0 2.85 3.45 4.28 5.46 2.26c2.02-2.01.59-5.46-2.26-5.46A3.21 3.21 0 0 0 9.8 14Z" />
      </symbol>
      <symbol viewBox="0 0 24 24" id="link">
        <g fill="currentColor">
          <path d="M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72l4.848-4.867Z" />
          <path d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837Z" />
        </g>
      </symbol>
      <symbol id="plane" viewBox="0 0 256 256">
        <path d="M232 127.89a16 16 0 0 1-8.18 14L55.91 237.9A16.14 16.14 0 0 1 48 240a16 16 0 0 1-15.05-21.34l27.35-79.95a4 4 0 0 1 3.79-2.71H136a8 8 0 0 0 8-8.53a8.19 8.19 0 0 0-8.26-7.47H64.16a4 4 0 0 1-3.79-2.7l-27.44-80a16 16 0 0 1 22.92-19.23l168 95.89a16 16 0 0 1 8.15 13.93Z" />
      </symbol>
      <symbol id="info" viewBox="0 0 16 16">
        <path d="M8 7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 7zm0-.75a.749.749 0 1 0 0-1.5.749.749 0 0 0 0 1.498zM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8zm6-5a5 5 0 1 0 0 10A5 5 0 0 0 8 3z" />
      </symbol>
      <symbol id="trashcan" viewBox="0 0 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
      </symbol>
    </svg>
  );
};

export default SvgSprite;