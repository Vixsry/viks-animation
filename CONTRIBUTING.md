# Contributing to VIKS Animation Library

<div align="center">

[![Code Style](https://img.shields.io/badge/Code_Style-Prettier-00FFFF?style=for-the-badge&logoColor=black)](#code-style)
[![Commit Style](https://img.shields.io/badge/Commits-Conventional-40E0D0?style=for-the-badge&logoColor=black)](#commit-guidelines)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-00FFFF?style=for-the-badge&logoColor=black)](#submitting-pull-requests)

</div>

## 🌟 Welcome!

First off, thank you for considering contributing to VIKS Animation Library! It's people like you that make VIKS such a great tool. This document provides guidelines and steps for contributing.

## 📑 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Documentation](#documentation)
- [Testing Guidelines](#testing-guidelines)
- [Community](#community)

## 📜 Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

1. **Fork the Repository**
   ```bash
   git clone https://github.com/Vixsry/viks-animation.git
   cd viks-animation
   ```

2. **Install Dependencies**
   ```bash
   npm install viks-animation --save
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Run Development Environment**
   ```bash
   npm run dev
   ```

## 💻 Development Process

### Environment Setup

```bash
# Install development dependencies
npm install --save-dev

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Project Structure
```
viks-animation/
├── src/
│   ├── js/
│   │   └── viks.js
│   ├── css/
│   │   └── viks.css
├── dist/
│   ├── viks.min.css
│   └── viks.min.js
bower.json
package.json
README.md
LICENSE
CONTRIBUTING.md
.gitignore
```

## 🔄 Pull Request Process

1. **Branch Naming Convention**
   - Feature: `feature/description`
   - Bug Fix: `fix/description`
   - Documentation: `docs/description`
   - Performance: `perf/description`

2. **Before Submitting a PR**
   - Update the README.md with details of changes (if applicable)
   - Update the documentation
   - Add or update tests
   - Ensure the test suite passes
   - Update the version numbers following [SemVer](http://semver.org/)

3. **PR Template**
   ```markdown
   ## Description
   [Describe your changes]

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Checklist
   - [ ] My code follows the style guidelines
   - [ ] I have performed a self-review
   - [ ] I have commented my code
   - [ ] I have updated the documentation
   - [ ] I have added tests
   - [ ] All tests pass
   ```

## 📝 Coding Standards

### JavaScript Style Guide

- Use ES6+ features
- Follow Prettier configuration
- Maximum line length: 100 characters
- Use meaningful variable names
- Document complex logic

```javascript
// ✅ Good
const calculateOffset = (element, options) => {
  const { offset = 0 } = options;
  return element.getBoundingClientRect().top + offset;
};

// ❌ Bad
const calc = (e, o) => {
  return e.getBoundingClientRect().top + (o.offset || 0);
};
```

### CSS Style Guide

```css
/* ✅ Good */
.viks-animation {
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}

/* ❌ Bad */
.anim {
  transform:translateY(20px);opacity:0;
  transition: all .3s ease
}
```

## 📊 Commit Guidelines

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style
- `refactor`: Code refactoring
- `perf`: Performance
- `test`: Tests
- `chore`: Maintenance

Example:
```
feat(animations): add new zoom-rotate animation

- Added new animation combining zoom and rotation
- Updated documentation
- Added tests

Closes #123
```

## 📚 Documentation

- Update JSDoc comments for all public methods
- Keep README.md updated
- Update animation catalog
- Add examples for new features

Example JSDoc:
```javascript
/**
 * Initializes animation for an element
 * @param {HTMLElement} element - Target element
 * @param {Object} options - Animation options
 * @param {number} [options.duration=1000] - Animation duration in ms
 * @param {string} [options.easing='ease'] - Animation timing function
 * @returns {void}
 */
```

## 🧪 Testing Guidelines

### Writing Tests

```javascript
describe('VIKS Animation', () => {
  it('should initialize with default options', () => {
    const element = document.createElement('div');
    const viks = new VIKS(element);
    expect(viks.options).toEqual({
      duration: 1000,
      easing: 'ease',
      offset: 0
    });
  });
});
```

### Test Coverage Requirements
- Minimum 80% coverage for new code
- All core functionality must be tested
- Include edge cases
- Test browser compatibility

## 👥 Community

### Getting Help
- GitHub Issues
- Discord Community
- Stack Overflow tag: `viks-animation`

### Regular Contributors
- Access to development meetings
- Mentioned in README.md
- Early access to new features

## 🏆 Recognition

All contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Given credit in documentation

## 📋 Issue Templates

### Bug Report Template
```markdown
**Description:**
[Clear description of the bug]

**Steps to Reproduce:**
1. [First Step]
2. [Second Step]
3. [And so on...]

**Expected behavior:**
[What you expected to happen]

**Actual behavior:**
[What actually happened]

**Environment:**
- Browser:
- OS:
- VIKS Version:
```

### Feature Request Template
```markdown
**Feature Description:**
[Describe the feature]

**Use Case:**
[Why is this feature needed?]

**Proposed Solution:**
[Your ideas for implementation]

**Alternatives Considered:**
[Other solutions you've considered]
```

---

<div align="center">

[![Questions](https://img.shields.io/badge/Questions%3F-Ask_Away!-00FFFF?style=for-the-badge&logoColor=black)](https://github.com/Vixsry/viks-animation/issues)

Thank you for contributing to VIKS Animation Library! 🎉

</div>