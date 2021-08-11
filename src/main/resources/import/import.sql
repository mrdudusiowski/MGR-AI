--Role użytkowników aplikacji

INSERT INTO roles(id, name) VALUES(1, 'ROLE_ADMIN');
INSERT INTO roles(id, name) VALUES(2, 'ROLE_MODERATOR');
INSERT INTO roles(id, name) VALUES(3, 'ROLE_USER');
INSERT INTO roles(id, name) VALUES(4, 'ROLE_ANDROID_USER');

INSERT INTO user_settings(id, items_on_page, language, view_type) VALUES(0, 10, 'EN', 'VIEW_LIST');
INSERT INTO users(id, username, name, surname, email, password, phone, draft, enabled, version, user_settings) VALUES(0, 'admin', 'CPMA', 'Admin', 'duduspatryk1@interia.eu', '$2a$10$fY/xiRfPWzgIadHQsiBkfO6h5Zmux5meLmfP6xzqUut5W43kf9mSC', '604-367-321', false, true, 0, 0);
INSERT INTO user_roles(user_id, role_id) VALUES(0, 1), (0, 3), (0,4);
