const get_password=(account) =>{
    const profiles = {
        joey: "91",
        mei: "99",
    };
    return profiles[account];
}
export { get_password }
