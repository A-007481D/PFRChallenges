#!/usr/bin/env node

/**
 * Centralized js Challenge Runner
 * Usage: node index.js <challengeKey> [args]
 */

const employees = require('./Dataset');

// ============ Challenge Function Stubs ============
function getFirstEmployeeFirstName(employees) {
    return employees[0].firstName;
}


function getLastEmployeeLastName(employees) {
    // TODO: implement
}

function getEmployeeDepartmentById(employees, id) {
    // TODO: implement
}

function countEmployees(employees) {
    // TODO: implement
}

function hasInactiveEmployees(employees) {
    // TODO: implement
}

function calculateAverageAge(employees) {
    // TODO: implement
}

function getHighestPaidEmployee(employees) {
    // TODO: implement
}

function countEmployeesInDepartment(employees, dept) {
    // TODO: implement
}

function getUniqueDepartments(employees) {
    // TODO: implement
}

function hasEmployeesWithoutProjects(employees) {
    // TODO: implement
}

function countEnglishSpeakingEmployees(employees) {
    // TODO: implement
}

function getEmployeesByProject(employees, project) {
    // TODO: implement
}

function getEmployeesWithMoreThanTwoSkills(employees) {
    // TODO: implement
}

function getEmployeesByLastNameInitial(employees, initial) {
    // TODO: implement
}

function calculateAverageSalaryByDepartment(employees) {
    // TODO: implement
}

function getEmployeesJoinedAfterYear(employees, year) {
    // TODO: implement
}

function getMultilingualEmployees(employees) {
    // TODO: implement
}

function getMostCommonSkill(employees) {
    // TODO: implement
}

function getHighEarningEmployees(employees, threshold) {
    // TODO: implement
}

function getLongestServingEmployee(employees) {
    // TODO: implement
}

function countEmployeesByDepartment(employees) {
    // TODO: implement
}

function getLargestDepartment(employees) {
    // TODO: implement
}

function calculateTotalSalaryByDepartment(employees) {
    // TODO: implement
}

function getPositionsInDepartment(employees, dept) {
    // TODO: implement
}

function calculateAverageProjectsByDepartment(employees) {
    // TODO: implement
}

function getUniqueProjectNames(employees) {
    // TODO: implement
}

function countEmployeesByProject(employees) {
    // TODO: implement
}

function getSoloProjects(employees) {
    // TODO: implement
}

function getEmployeesWithMultipleProjects(employees) {
    // TODO: implement
}

function getMostPopularProject(employees) {
    // TODO: implement
}

function getFullNames(employees) {
    // TODO: implement
}

function normalizeNames(employees) {
    // TODO: implement
}

function getEmployeeInitials(employees) {
    // TODO: implement
}

function addYearsOfService(employees) {
    // TODO: implement
}

function groupEmployeesByLastNameInitial(employees) {
    // TODO: implement
}

function getProjectEmployeeDictionary(employees) {
    // TODO: implement
}

function getDepartmentProjectEmployeeStructure(employees) {
    // TODO: implement
}

function reverseEmployeeNames(employees) {
    // TODO: implement
}

function replaceVowelsInNames(employees) {
    // TODO: implement
}

function getAllEmployeeEmails(employees) {
    // TODO: implement
}

function calculateMedianSalary(employees) {
    // TODO: implement
}

function calculateAgeStandardDeviation(employees) {
    // TODO: implement
}

function calculateSalaryPercentiles(employees) {
    // TODO: implement
}

function calculateAgeSalaryCorrelation(employees) {
    // TODO: implement
}

function calculateAverageSkillsByDepartment(employees) {
    // TODO: implement
}

function getMostCommonLanguageCombination(employees) {
    // TODO: implement
}

function calculateAverageProjectsByAgeGroup(employees) {
    // TODO: implement
}

function getMostFrequentFirstNameInitial(employees) {
    // TODO: implement
}

function calculateSalaryDifferenceByStatus(employees) {
    // TODO: implement
}

function calculateRetentionRateByYear(employees) {
    // TODO: implement
}

function findEmployeesWithSpecificSkills(employees, skills) {
    // TODO: implement
}

function findEmployeesWithSpecialCharacters(employees) {
    // TODO: implement
}

function findEmployeesWithDifferentEmailDomain(employees) {
    // TODO: implement
}

function groupEmployeesByProjectCount(employees) {
    // TODO: implement
}

function findEmployeesWithAnagramNames(employees) {
    // TODO: implement
}

function findEmployeesWithAllVowelsInName(employees) {
    // TODO: implement
}

function findEmployeesWithSameFirstName(employees) {
    // TODO: implement
}

function groupEmployeesByFirstNameLength(employees) {
    // TODO: implement
}

function findEmployeesWithPalindromeLastName(employees) {
    // TODO: implement
}

function searchEmployeesByProperty(employees, prop, value) {
    // TODO: implement
}

// ============ Challenge Map ============
const challenges = {
    getFirstEmployeeFirstName: () => console.log(getFirstEmployeeFirstName(employees)),
    getLastEmployeeLastName: () => console.log(getLastEmployeeLastName(employees)),
    getEmployeeDepartmentById: () => console.log(getEmployeeDepartmentById(employees, Number(process.argv[3]))),
    countEmployees: () => console.log(countEmployees(employees)),
    hasInactiveEmployees: () => console.log(hasInactiveEmployees(employees)),
    calculateAverageAge: () => console.log(calculateAverageAge(employees)),
    getHighestPaidEmployee: () => console.log(getHighestPaidEmployee(employees)),
    countEmployeesInDepartment: () => console.log(countEmployeesInDepartment(employees, process.argv[3])),
    getUniqueDepartments: () => console.log(getUniqueDepartments(employees)),
    hasEmployeesWithoutProjects: () => console.log(hasEmployeesWithoutProjects(employees)),
    countEnglishSpeakingEmployees: () => console.log(countEnglishSpeakingEmployees(employees)),
    getEmployeesByProject: () => console.log(getEmployeesByProject(employees, process.argv[3])),
    getEmployeesWithMoreThanTwoSkills: () => console.log(getEmployeesWithMoreThanTwoSkills(employees)),
    getEmployeesByLastNameInitial: () => console.log(getEmployeesByLastNameInitial(employees, process.argv[3])),
    calculateAverageSalaryByDepartment: () => console.log(calculateAverageSalaryByDepartment(employees)),
    getEmployeesJoinedAfterYear: () => console.log(getEmployeesJoinedAfterYear(employees, Number(process.argv[3]))),
    getMultilingualEmployees: () => console.log(getMultilingualEmployees(employees)),
    getMostCommonSkill: () => console.log(getMostCommonSkill(employees)),
    getHighEarningEmployees: () => console.log(getHighEarningEmployees(employees, Number(process.argv[3]))),
    getLongestServingEmployee: () => console.log(getLongestServingEmployee(employees)),
    countEmployeesByDepartment: () => console.log(countEmployeesByDepartment(employees)),
    getLargestDepartment: () => console.log(getLargestDepartment(employees)),
    calculateTotalSalaryByDepartment: () => console.log(calculateTotalSalaryByDepartment(employees)),
    getPositionsInDepartment: () => console.log(getPositionsInDepartment(employees, process.argv[3])),
    calculateAverageProjectsByDepartment: () => console.log(calculateAverageProjectsByDepartment(employees)),
    getUniqueProjectNames: () => console.log(getUniqueProjectNames(employees)),
    countEmployeesByProject: () => console.log(countEmployeesByProject(employees)),
    getSoloProjects: () => console.log(getSoloProjects(employees)),
    getEmployeesWithMultipleProjects: () => console.log(getEmployeesWithMultipleProjects(employees)),
    getMostPopularProject: () => console.log(getMostPopularProject(employees)),
    getFullNames: () => console.log(getFullNames(employees)),
    normalizeNames: () => console.log(normalizeNames(employees)),
    getEmployeeInitials: () => console.log(getEmployeeInitials(employees)),
    addYearsOfService: () => console.log(addYearsOfService(employees)),
    groupEmployeesByLastNameInitial: () => console.log(groupEmployeesByLastNameInitial(employees)),
    getProjectEmployeeDictionary: () => console.log(getProjectEmployeeDictionary(employees)),
    getDepartmentProjectEmployeeStructure: () => console.log(getDepartmentProjectEmployeeStructure(employees)),
    reverseEmployeeNames: () => console.log(reverseEmployeeNames(employees)),
    replaceVowelsInNames: () => console.log(replaceVowelsInNames(employees)),
    getAllEmployeeEmails: () => console.log(getAllEmployeeEmails(employees)),
    calculateMedianSalary: () => console.log(calculateMedianSalary(employees)),
    calculateAgeStandardDeviation: () => console.log(calculateAgeStandardDeviation(employees)),
    calculateSalaryPercentiles: () => console.log(calculateSalaryPercentiles(employees)),
    calculateAgeSalaryCorrelation: () => console.log(calculateAgeSalaryCorrelation(employees)),
    calculateAverageSkillsByDepartment: () => console.log(calculateAverageSkillsByDepartment(employees)),
    getMostCommonLanguageCombination: () => console.log(getMostCommonLanguageCombination(employees)),
    calculateAverageProjectsByAgeGroup: () => console.log(calculateAverageProjectsByAgeGroup(employees)),
    getMostFrequentFirstNameInitial: () => console.log(getMostFrequentFirstNameInitial(employees)),
    calculateSalaryDifferenceByStatus: () => console.log(calculateSalaryDifferenceByStatus(employees)),
    calculateRetentionRateByYear: () => console.log(calculateRetentionRateByYear(employees)),
    findEmployeesWithSpecificSkills: () => console.log(findEmployeesWithSpecificSkills(employees, process.argv.slice(3))),
    findEmployeesWithSpecialCharacters: () => console.log(findEmployeesWithSpecialCharacters(employees)),
    findEmployeesWithDifferentEmailDomain: () => console.log(findEmployeesWithDifferentEmailDomain(employees)),
    groupEmployeesByProjectCount: () => console.log(groupEmployeesByProjectCount(employees)),
    findEmployeesWithAnagramNames: () => console.log(findEmployeesWithAnagramNames(employees)),
    findEmployeesWithAllVowelsInName: () => console.log(findEmployeesWithAllVowelsInName(employees)),
    findEmployeesWithSameFirstName: () => console.log(findEmployeesWithSameFirstName(employees)),
    groupEmployeesByFirstNameLength: () => console.log(groupEmployeesByFirstNameLength(employees)),
    findEmployeesWithPalindromeLastName: () => console.log(findEmployeesWithPalindromeLastName(employees)),
    searchEmployeesByProperty: () => console.log(searchEmployeesByProperty(employees, process.argv[3], process.argv[4])),
};

// ============ CLI Dispatcher ============
const [,, key] = process.argv;
if (!key || !challenges[key]) {
    console.error('Usage: node index.js <challengeKey> [args]');
    console.error('Available challenges:', Object.keys(challenges).join(', '));
    process.exit(1);
}

// Execute the selected challenge
challenges[key]();
