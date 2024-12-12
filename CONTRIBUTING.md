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
   npm i viks-animation
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

### Test Structure
Tests are organized into several main categories:

1. **Initialization Tests**
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

2. **Animation Parameters Tests**
```javascript
describe('Animation Parameters', () => {
  it('should get correct delay value', () => {
    const element = document.createElement('div');
    element.setAttribute('data-viks', 'fade-up delay-500');
    container.appendChild(element);
    
    const viks = VIKS.init();
    const delay = viks.getDelay(element);
    expect(delay).toBe('500');
  });

  it('should get correct duration value', () => {
    const element = document.createElement('div');
    element.setAttribute('data-viks', 'fade-up duration-2000');
    container.appendChild(element);
    
    const viks = VIKS.init();
    const duration = viks.getDuration(element);
    expect(duration).toBe('2000');
  });
});
```

3. **Animation Application Tests**
```javascript
describe('Animation Application', () => {
  it('should apply animation class correctly', () => {
    const element = document.createElement('div');
    element.setAttribute('data-viks', 'fade-up');
    container.appendChild(element);
    
    const viks = VIKS.init();
    viks.applyAnimation(element);
    
    expect(element.classList.contains('viks-animate')).toBe(true);
  });
});
```

4. **Scroll Behavior Tests**
```javascript
describe('Scroll Behavior', () => {
  it('should handle smooth scroll for anchor links', () => {
    const link = document.createElement('a');
    const target = document.createElement('div');
    link.setAttribute('href', '#test-section');
    target.setAttribute('id', 'test-section');
    container.appendChild(link);
    container.appendChild(target);

    const scrollIntoViewMock = jest.fn();
    target.scrollIntoView = scrollIntoViewMock;

    link.click();

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth'
    });
  });
});
```

### Test Setup Requirements

1. **Jest Configuration**
```json
{
  "jest": {
    "testEnvironment": "jsdom",
    "setupFiles": ["./jest.setup.js"]
  }
}
```

2. **Jest Setup File**
```javascript
// jest.setup.js
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};
```

### Writing New Tests

When adding new tests, follow these guidelines:

1. Create a clear describe block for the feature
2. Use meaningful test names that describe the expected behavior
3. Setup and cleanup test environment properly
4. Mock external dependencies when needed
5. Test both success and failure cases
6. Test edge cases

Example template for new tests:
```javascript
describe('Feature Name', () => {
  let container;
  
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    jest.clearAllMocks();
  });

  it('should describe expected behavior', () => {
    // Test implementation
  });
});
```

### Test Coverage Requirements

- Minimum 80% coverage for new code
- All animation types must have tests
- Test browser compatibility
- Include tests for:
  - Animation parameters
  - Element detection
  - Scroll behavior
  - Animation application/removal
  - Window events
  - Intersection Observer functionality

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- path/to/test-file.test.js

# Run tests in watch mode
npm test -- --watch
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