import Link from "next/link";

const style = {
  navStyle: {
    borderBottom: "1px solid",
  },
  navWrapper: {
    variant: "layout.row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 8,
  },
  linkGroup: {
    "> * + *": {
      pl: 3,
    },
  },
};

const Nav = () => {
  return (
    <nav sx={style.navStyle}>
      <div sx={style.navWrapper}>
        <span>Logo</span>
        <div sx={style.linkGroup}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
