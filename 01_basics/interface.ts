interface User {
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial?: () => string;
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  email: "hc@gmail",
  userId: 123,
  role: "admin",
  startTrial: () => {
    return "kishan".toUpperCase();
  },
  githubToken: "abc",
  getCoupon: (name: "kishan", off: 10) => {
    return 10;
  },
};

// console.log(hitesh);

export {};
