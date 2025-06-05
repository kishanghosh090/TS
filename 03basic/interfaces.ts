interface User {
  readonly _id: number;
  name: string;
  email: string;
  isActive: boolean;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponname: string): number;
}

const hitesh: User = {
  _id: 12,
  email: "",
  name: "",
  isActive: true,
  startTrial: function () {
    return `welcome ${this.name}`;
  },
  getCoupon: function (couponname = this.name) {
    return couponname.length;
  },
};
