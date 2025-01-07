# Contributing to VIKS Animation Library

<div align="center">

[![Code Style](https://img.shields.io/badge/Code_Style-Prettier-00FFFF?style=for-the-badge&logoColor=black)](#code-style)
[![Commit Style](https://img.shields.io/badge/Commits-Conventional-40E0D0?style=for-the-badge&logoColor=black)](#commit-guidelines)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-00FFFF?style=for-the-badge&logoColor=black)](#submitting-pull-requests)

</div>

## 🌟 Welcome!

First of all, thank you for considering contributing to VIKS Animation Library! People like you make VIKS a great tool. This document provides guidelines and steps for contributing.

## 📜 Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Use friendly and inclusive language
- Respect different viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

## 🔄 Pull Request Process

1. **Branch Naming Convention**
   - Feature: `feature/description`
   - Bug Fix: `fix/description`
   - Documentation: `docs/description`
   - Performance: `perf/description`

2. **Before Submitting PR**
   - Update README.md with details of changes (if needed)
   - Update documentation
   - Add or update tests
   - Ensure all tests pass
   - Update version numbers following [SemVer](http://semver.org/)

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
- `test`: Testing
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
- Keep README.md up to date
- Update animation catalog
- Add examples for new features

JSDoc Example:
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
Tests are organized into main categories:

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

2. **Animation Parameter Tests**
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
});
```

### Testing Requirements

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

## 👥 Community

### Getting Help
- GitHub Issues
- Discord Community
- Stack Overflow Tag: `viks-animation`

### Regular Contributors
- Access to development meetings
- Mentioned in README.md
- Early access to new features

## 🏆 Recognition

All contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

## 📋 Issue Templates

### Bug Report Template
```markdown
**Description:**
[Clear description of the bug]

**Steps to Reproduce:**
1. [First Step]
2. [Second Step]
3. [And so on...]

**Expected Behavior:**
[What you expected to happen]

**Actual Behavior:**
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
[Your implementation ideas]

**Alternatives Considered:**
[Other solutions you've considered]
```

---

<div align="center">

[![Questions](https://img.shields.io/badge/Have_Questions%3F-Ask_Away!-00FFFF?style=for-the-badge&logoColor=black)](https://github.com/Vixsry/viks-animation/issues)

Thank you for contributing to VIKS Animation Library! 🎉

</div>